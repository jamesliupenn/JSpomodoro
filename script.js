// Initiate variables
var isCounting = false;
var isPaused = false;
var intervalID = 0;
var storedCount = 0;

function start(counts) {
	isCounting = true;
	if (this.isPaused == true) {
		this.intervalID = setInterval(() => {
			storedCount--;
			document.getElementById("clock").innerHTML = this.countsToClock(storedCount);
		}, 1000);
	}
	else {
		intervalID = setInterval(() => {
			counts--;
			this.storedCount = counts;
			document.getElementById("clock").innerHTML = this.countsToClock(counts);
		}, 1000);
	}
}

function stop() {
	this.isPaused = false;
	this.isCounting = false;
	clearInterval(intervalID);
}

function pause() {
	this.isPaused = true;
	this.isCounting = false;
	clearInterval(intervalID);
}

function reset(set) {
	if (isCounting == false) {
		document.getElementById("clock").innerHTML = this.countsToClock(set);
		this.isPaused = false;
	}
}

function countsToClock(counts) {
	var mins = Math.floor(counts / 60);
	var seconds = counts % 60;
	var clock = mins + ":" + seconds;
	return clock;
}