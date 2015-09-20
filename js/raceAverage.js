var RaceAverage = function(times) {
	this.times = times;
	this.startTime = new Date(2015, 0, 1, 8);
}

RaceAverage.prototype.avgMinutes = function() {
	var totalMinutes = 0;
	for(var i=0; i<this.times.length; i++) {
		totalMinutes += this.getMinutes(this.times[i]);
	}
	return Math.round(totalMinutes / this.times.length);
}

RaceAverage.prototype.getMinutes = function(inputTime) {
	var inputDate = new Date(this.startTime),
		days = +inputTime.substring(14, inputTime.length),
		hours = +inputTime.substring(0, 2),
		minutes = +inputTime.substring(3, 5);

	if(inputTime.indexOf('PM') > 0 && hours < 12)
		hours+=12;
	else if(inputTime.indexOf('AM') > 0 && hours == 12)
		hours-=12;
	
	inputDate.setDate(this.startTime.getDate() + days - 1);
	inputDate.setHours(this.startTime.getHours() + hours - 8);
	inputDate.setMinutes(this.startTime.getMinutes() + minutes);

	return Math.round((inputDate - this.startTime) / 60000);
}