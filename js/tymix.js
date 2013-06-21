function Tymix(opts) {
	this.describer = new Describer({
		level: opts.level
	});
}

Tymix.prototype.setDesciptionLevel = function setDesciptionLevel(level) {
	this.describer.setLevel(level);
};

Tymix.prototype.getDesciptionLevel = function getDesciptionLevel() {
	this.describer.getLevel();
};

Tymix.prototype.describe = function describe(unixTime) {
	var formattedTimestamp = TimeFormatter.formatTimePassed(unixTime);
	
	return this.describer.describe(formattedTimestamp);
};