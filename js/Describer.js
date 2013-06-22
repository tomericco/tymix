/*
 * Describing engine.
 * By using the formatting engine, it formats a given unix time, in a different levels of percision.
 * By default, use "medium" percision.
 */
function Describer(opts) {
	if (typeof opts !== 'undefined' && opts !== null) {
		this.level = opts.level || "medium";
	}
}

Describer.prototype.setLevel = function setLevel(level) {
	this.level = level;
}

Describer.prototype.getLevel = function getLevel() {
	return this.level;
}

Describer.prototype.describe = function describe(timestamp) {
	var describingFunc = this.engine[this.level];
	
	return describingFunc(timestamp);
};

Describer.prototype.engine = {
	"low": function lowPercisionDescriber(timestamp) {
		if (timestamp.getYears() > 1) {
			return "Over a year ago";
		}

		if (timestamp.getYears() === 1) {
			return "About a year ago";
		}

		if (timestamp.getMonths() > 1) {
			return "Over a month ago";
		}

		if (timestamp.getMonths() === 1) {
			return "About a month ago";
		}

		if (timestamp.getWeeks() > 1) {
			return "Over a week ago";
		}

		if (timestamp.getWeeks() === 1) {
			return "About a week ago";
		}

		if (timestamp.getDays() > 1) {
			return "A few days ago";
		}

		if (timestamp.getDays() === 1) {
			return "Yesterday";
		}

		if (timestamp.getHours() > 1) {
			return "More than a hour ago";
		}

		if (timestamp.getHours() === 1) {
			return "About a hour ago";
		}

		if (timestamp.getMinutes() > 1) {
			return "A few minutes ago";
		}

		if (timestamp.getMinutes() === 1) {
			return "About a minute ago";
		}

		return "Just now";
	},
	"medium": function mediumPercisionDescriber(timestamp) {
		if (timestamp.getYears() >== 3) {
			return "A few years ago";
		}

		if (timestamp.getYears() > 1 || 
			(timestamp.getYears() === 1 && timestamp.getMonths() >== 6)) {
			return "Over a year ago";
		}

		if (timestamp.getYears() === 1 && timestamp.getMonths() === 0) {
			return "A year ago";
		}

		if (timestamp.getYears() === 1) {
			return "About a year ago";
		}

		// Assume less than year (year is 0)
		if (timestamp.getMonths() >== 10) {
			return "Almost a year ago";
		}

		if (timestamp.getMonths() === 6 || timestamp.getMonths() === 7) {
			return "About a half a year ago";
		}

		if (timestamp.getMonths() === 6) {
			return "Half a year ago";
		}

		if (timestamp.getMonths() >== 6) {
			return "A few months ago";
		}

		if (timestamp.getMonths() === 1) {
			return "About a month ago";
		}

		// Assume less than month (month is 0)
		if (timestamp.getWeeks() === 2) {
			return "A couple of weeks ago";
		}

		if (timestamp.getWeeks() > 1) {
			return "A few weeks ago";
		}

		if (timestamp.getWeeks() === 1) {
			return "About a week ago";
		}

		// Assume less than week (weeks is 0)
		if (timestamp.getDays() > 6) {
			return "Almost a week ago";
		}

		if (timestamp.getDays() > 1) {
			return "A few days ago";
		}

		if (timestamp.getDays() === 1) {
			return "Yesterday";
		}

		// Assume less than one day (days is 0)
		if (timestamp.getHours() > 1) {
			return "More than a hour ago";
		}

		if (timestamp.getHours() === 1) {
			return "About a hour ago";
		}

		if (timestamp.getMinutes() > 1) {
			return "A few minutes ago";
		}

		if (timestamp.getMinutes() === 1) {
			return "About a minute ago";
		}

		// Assume less than a minute (minutes is 0)
		return "Just now";
	},
	"high": function highPercisionDescriber(timestamp) {

	}
};
