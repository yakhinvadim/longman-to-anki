const YEAR_MONTH_DATE_LENGTH = 10
const getDateString = () => new Date().toISOString().slice(0, YEAR_MONTH_DATE_LENGTH)

export default getDateString
