import moment from "moment";

type ConstructDate = Date | number
type DateFormat = 'YYYY-MM-DD' | 'LTS'
type DateUnit = 'day' | 'month' | 'year'

class Datetime {
	private _date: Date;

	constructor(date: ConstructDate = new Date()) {
		this._date = date instanceof Date ? date : new Date(date)
	}

	static datetime(date: ConstructDate = new Date()) {
		return new Datetime(date)
	}

	public format(dateFormat: DateFormat) {
		return moment(this._date).format(dateFormat)
	}

	public add(amount: number, unit: DateUnit) {
		return Datetime.datetime(moment(this._date).add(amount, unit).toDate())
	}

	public subtract(amount: number, unit: DateUnit) {
		return Datetime.datetime(moment(this._date).subtract(amount, unit).toDate())
	}
}

export const datetime = Datetime.datetime;