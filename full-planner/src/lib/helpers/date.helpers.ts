export const addDaysToDate = (date: Date, numberOfDaysToAdd: number) => {
	const result = new Date(date);
	result.setDate(result.getDate() + numberOfDaysToAdd);

	return result;
};

export const formatDate = (date: Date) => {
	const dateTimeFormatter = new Intl.DateTimeFormat('en-US', {
		month: 'numeric',
		day: 'numeric',
		year: '2-digit'
	});

	return dateTimeFormatter.format(date);
};
