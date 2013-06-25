function Timestamp(time) {
	if (typeof time === 'undefined' || time === null) {
		return null;
	}

	this.minutes = time.minutes;
	this.hours = time.hours;
	this.days = time.days;
	this.weeks = time.weeks;
	this.months = time.months;
	this.years = time.years;	
}

Timestamp.prototype.setMinutes = function setMinutes(minutes) {
	this.minutes = minutes;
}

Timestamp.prototype.getMinutes = function getMinutes() {
	return this.minutes;
}

Timestamp.prototype.setHours = function setHours(hours) {
	this.hours = hours;
}

Timestamp.prototype.getHours = function getHours() {
	return this.hours;
}

Timestamp.prototype.setDays = function setDays(days) {
	this.days = days;
}

Timestamp.prototype.getDays = function getDays() {
	return this.days;
}

Timestamp.prototype.setWeeks = function setWeeks(weeks) {
	this.weeks = weeks;
}

Timestamp.prototype.getWeeks = function getWeeks() {
	return this.weeks;
}

Timestamp.prototype.setMonths = function setMonths(months) {
	this.months = months;
}

Timestamp.prototype.getMonths = function getMonths() {
	return this.months;
}

Timestamp.prototype.setYears = function setYears(years) {
	this.years = years;
}

Timestamp.prototype.getYears = function getYears() {
	return this.years;
}