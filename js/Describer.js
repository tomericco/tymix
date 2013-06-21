/*
 * Describing engine.
 * By using the formatting engine, it formats a given unix time, in a different levels of percision.
 */
function Describer(opts) {
	this.level = opts.level;
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

	},
	"high": function highPercisionDescriber(timestamp) {

	}
};
