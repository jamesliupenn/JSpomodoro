// Initiate variables
var isCounting = false;
var isPaused = false;
var intervalID = 0;
var storedCount = 0;

function start(time) {
	var counts = clockToCounts(time);
	console.log(counts);
	if (isCounting == false) {
		if (isPaused == true) {
			this.intervalID = setInterval(() => {
				storedCount--;
				document.getElementById("clock").innerHTML = this.countsToClock(storedCount);
			}, 1000);
			isCounting = true;
		}
		else {
			intervalID = setInterval(() => {
				counts--;
				storedCount = counts;
				document.getElementById("clock").innerHTML = this.countsToClock(counts);
			}, 1000);
			isCounting = true;
		}
	}
}

function stop() {
	isPaused = false;
	isCounting = false;
	clearInterval(intervalID);
}

function pause() {
	isPaused = true;
	isCounting = false;
	clearInterval(intervalID);
}

function reset(time) {
	if (isCounting == false) {
		document.getElementById("clock").innerHTML = time;
		isPaused = false;
	}
}

// A function to convert counts into time format
function countsToClock(counts) {
	var mins = Math.floor(counts / 60);
	var seconds = counts % 60;
	var clock = mins + ":" + (seconds < 10? '0':'') + seconds;
	return clock;
}

// A function to convert time into counts
function clockToCounts(clock) {
	var countArr = clock.split(":");
	// Now convert the strings to actual numbers before summing up
	var counts = (+countArr[0] * 60) + (+countArr[1]);
	return counts;
}