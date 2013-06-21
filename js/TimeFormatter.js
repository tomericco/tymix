/*
 * This namespace holds engine methods for formatting unix time into Timestamp object.
 */
TimeFormatter = {
	/*
	 * Calculates the time passed from now since the given unix timestamp (in seconds),
	 * formats it into a Timestamp object, and returns it.
	 */
	formatTimePassed: function formatTimePassed(unixTime) {
		var currentTime = Math.floor(new Date().getTime() / 1000);
		var secondsPassed = currentTime - unixTime;
		var formattedTime = {};

		// Calculate years (year is 31536000 seconds)
		formattedTime.years = Math.floor(secondsPassed / Constants.YEAR_IN_SECONDS);
		
		if (formattedTime.years > 0) {
			secondsPassed -= formattedTime.years * Constants.YEAR_IN_SECONDS;
		}	

		// Calculate months
		formattedTime.months = Math.floor(secondsPassed / Constants.MONTH_IN_SECONDS);

		if (formattedTime.months > 0) {
			secondsPassed -= formattedTime.months * Constants.MONTH_IN_SECONDS;
		}

		// Calculate weeks
		formattedTime.weeks = Math.floor(secondsPassed / Constants.WEEK_IN_SECONDS);

		if (formattedTime.weeks > 0) {
			secondsPassed -= formattedTime.weeks * Constants.WEEK_IN_SECONDS;
		}

		// Calculate days
		formattedTime.days = Math.floor(secondsPassed / Constants.DAY_IN_SECONDS);

		if (formattedTime.days > 0) {
			secondsPassed -= formattedTime.days * Constants.DAY_IN_SECONDS;
		}

		// Calculate hours
		formattedTime.hours = Math.floor(secondsPassed / Constants.HOUR_IN_SECONDS);

		if (formattedTime.hours > 0) {
			secondsPassed -= formattedTime.hours * Constants.HOUR_IN_SECONDS;
		}

		// Calculate minutes
		formattedTime.minutes = Math.floor(secondsPassed / Constants.MINUTE_IN_SECONDS);

		if (formattedTime.minutes > 0) {
			secondsPassed -= formattedTime.minutes * Constants.MINUTE_IN_SECONDS;
		}

		return new Timestamp(formattedTime);
	},
	/*
	 * Formats the given unix timestamp into a Timestamp object, and returns it.
	 */
	formatTime: function formatTime(unixTime) {

	}
};