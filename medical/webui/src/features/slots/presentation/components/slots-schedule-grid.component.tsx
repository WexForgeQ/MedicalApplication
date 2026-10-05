import { useAppNavigate } from '@core/utils';
import { formatFIO } from '@core/utils/helpers/format-fio.helper';
import type { Personal } from '@features/personal';
import { getPersonal } from '@features/personal/services';
import { AppointmentTypeNames } from '@features/slots/constants';
import { getSlots } from '@features/slots/services';
import type { Slot } from '@features/slots/types';
import { useAppDispatch } from '@store';
import { format } from 'date-fns';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function getSlotKey(doctorId: string, time: string) {
	return `${doctorId}_${time}`;
}

function add30Minutes(time: string): string {
	const [hours, minutes] = time.split(':').map(Number);
	const date = new Date();
	date.setHours(hours, minutes);
	date.setMinutes(date.getMinutes() + 30);

	const newHours = date.getHours().toString().padStart(2, '0');
	const newMinutes = date.getMinutes().toString().padStart(2, '0');

	return `${newHours}:${newMinutes}`;
}

function generateTimeRange(start: string, end: string): string[] {
	const times: string[] = [];
	let currentTime = start;

	while (currentTime <= end) {
		times.push(currentTime);
		currentTime = add30Minutes(currentTime);
	}

	return times;
}

export default function ScheduleTable() {
	const dispatch = useAppDispatch();
	const [doctors, setDoctors] = useState<Personal[]>([]);
	const [slots, setSlots] = useState<Slot[]>([]);
	const [search] = useSearchParams();
	const day = search.get('day');
	const navigate = useAppNavigate();

	const generateTimeSlots = useCallback(() => {
		const allTimes = new Set<string>();

		const standardTimes = [
			'08:00',
			'08:30',
			'09:00',
			'09:30',
			'10:00',
			'10:30',
			'11:00',
			'11:30',
			'12:00',
			'12:30',
			'13:00',
			'13:30',
			'14:00',
			'14:30',
			'15:00',
			'15:30',
			'16:00',
			'16:30',
			'17:00',
		];
		standardTimes.forEach((time) => allTimes.add(time));

		slots.forEach((slot) => {
			if (slot.time) {
				allTimes.add(slot.time);
			}
		});

		const uniqueTimes = Array.from(allTimes).sort((a, b) => {
			const timeA = new Date(`1970-01-01T${a}:00`).getTime();
			const timeB = new Date(`1970-01-01T${b}:00`).getTime();
			return timeA - timeB;
		});

		return uniqueTimes;
	}, [slots]);

	function compareTimes(timeA: string, timeB: string): number {
		const [hoursA, minutesA] = timeA.split(':').map(Number);
		const [hoursB, minutesB] = timeB.split(':').map(Number);

		if (hoursA !== hoursB) {
			return hoursA - hoursB;
		}
		return minutesA - minutesB;
	}

	const times = useMemo(() => generateTimeSlots(), [generateTimeSlots]);

	const slotMap = useMemo(() => {
		const map = new Map();
		slots.forEach((slot) => {
			if (slot.time) {
				map.set(getSlotKey(slot.doctor.id, slot.time), slot);
			}
		});
		return map;
	}, [slots]);

	useEffect(() => {
		dispatch(getPersonal({ pageNumber: 1, pageSize: 9999 }))
			.unwrap()
			.then((res) => setDoctors(res.data?.items || []))
			.catch(() => {});
	}, [search]);

	useEffect(() => {
		if (day) {
			try {
				const formattedDate = format(new Date(day), 'dd.MM.yyyy');
				dispatch(
					getSlots({
						pageNumber: 1,
						pageSize: 9999,
						date: formattedDate,
					}),
				)
					.unwrap()
					.then((res) => setSlots(res.data?.items || []))
					.catch(() => {});
			} catch (error) {
				console.error('Error formatting date:', error);
			}
		} else {
			setSlots([]);
		}
	}, [search]);

	const hasDay = !!day;
	const hasSlots = slots.length > 0;

	return (
		<div className="max-h-screen w-full overflow-auto bg-white">
			{!hasDay ? (
				<div className="flex size-full items-center justify-center text-[30px] text-primary">
					Выберите дату
				</div>
			) : !hasSlots ? (
				<div className="flex size-full items-center justify-center text-[30px] text-primary">
					Нет доступных слотов
				</div>
			) : (
				<table className="h-full w-fit table-fixed border-separate border-spacing-2 overflow-auto rounded-lg px-[5px] py-[5px]">
					<thead>
						<tr>
							<th className="sticky left-0 z-10 w-20"></th>
							{doctors.map((doctor) => (
								<th
									key={doctor.id}
									className="rounded-lg border border-bgGray bg-bgGray p-2 text-center text-sm font-medium"
								>
									{doctor.fio}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{times.map((time, rowIndex) => {
							const nextTime = times[rowIndex + 1];
							const timeRange = nextTime ? `${time} - ${nextTime}` : time;

							return (
								<tr key={time}>
									<td className="sticky left-0 z-0 rounded-lg border border-gray-200 bg-gray-50 text-center align-middle text-sm text-gray-600">
										{timeRange}
									</td>
									{doctors.map((doctor) => {
										const key = getSlotKey(doctor.id, time);
										const slot = slotMap.get(key) as Slot;

										if (slot) {
											if (slot.patient) {
												return (
													<td
														key={key}
														onClick={() =>
															search.get('slotId') == slot.id
																? navigate('', {
																		day: search.get('day')!,
																	})
																: navigate('', {
																		day: search.get('day')!,
																		slotId: slot.id,
																	})
														}
														className="rounded-lg border border-gray-200 bg-primary align-top"
													>
														<div className="rounded px-2 py-1 text-center text-[18px] text-white">
															<div
																title={slot.patient?.fio}
																className="max-w-full truncate"
															>
																{formatFIO(slot.patient?.fio)}
															</div>
															<div className="text-[16px]">
																{slot.appointmentType &&
																	AppointmentTypeNames[
																		slot.appointmentType
																	]}
															</div>
														</div>
													</td>
												);
											} else {
												return (
													<td
														key={key}
														className="text-center align-middle"
														onClick={() =>
															search.get('slotId') == slot.id
																? navigate('', {
																		day: search.get('day')!,
																	})
																: navigate('', {
																		day: search.get('day')!,
																		slotId: slot.id,
																		appointmentMode: 'true',
																	})
														}
													>
														<button className="h-full w-full rounded border-2 border-dashed border-gray-300 py-3 text-xl text-gray-500 hover:bg-gray-50">
															+
														</button>
													</td>
												);
											}
										}
										return (
											<td
												key={key}
												className="h-full w-full text-center align-middle"
											></td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</div>
	);
}
