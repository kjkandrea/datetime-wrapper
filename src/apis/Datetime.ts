import moment from "moment";

type DateFormat = 'YYYY-MM-DD' | 'LTS'

class Datetime {
	private _date: Date;

	constructor(date = new Date()) {
		this._date = date
	}

	static datetime(date = new Date()) {
		return new Datetime(date)
	}

	public format(dateFormat: DateFormat) {
		return moment(this._date).format(dateFormat)
	}
}

export const datetime = Datetime.datetime;