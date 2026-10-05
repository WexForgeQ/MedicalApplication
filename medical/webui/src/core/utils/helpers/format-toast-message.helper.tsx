export const formatToastMessageLine = (line: string, key?: string) => (
	<div key={key} className="font-montserrat text-[16px] font-medium">
		{line}
	</div>
);

export const formatToastErrorMessage = (message: string) => {
	return message.split('\n').map((line, i) => formatToastMessageLine(line, i.toString()));
};
