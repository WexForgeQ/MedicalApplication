import { ScreenTitle } from '@core';
import { CompanyInfoForm } from '../components/company-info.form.component';

export default () => {
	return (
		<div className="flex size-full flex-col items-center gap-[40px] overflow-auto py-[10px] pb-[40px] pl-[10px] pr-[10px]">
			<div className="flex w-full flex-col gap-2">
				<div className="flex h-[50px] w-full items-center gap-[180px]">
					<ScreenTitle title="Настройки" />
				</div>
			</div>
			<CompanyInfoForm />
		</div>
	);
};
