export const addDaysToDate = (date: Date, numberOfDaysToAdd: number) => {
	const result = new Date(date);
	result.setDate(result.getDate() + numberOfDaysToAdd);

	return result;
};
