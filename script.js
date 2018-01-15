// Initiate variables
let isCounting = false;
let isPaused = false;
let isStopped = false;
let intervalID = 0;
let storedCount = 0;
let fullbar = 0;
let time = +document.getElementById("clock").innerHTML;

function start() {
	// If a stop was pressed before, do not start timer
	if (isStopped == true) {
		window.alert("Please reset the counter!");
	}
	else {
		// Update the time again before starting to match configured time

		// This prevents a second intervalID from being assigned
		if (isCounting == false) {
			// This is for resuming a timer
			if (isPaused == true) {
				intervalID = setInterval(() => {
					storedCount--;
					this.moveBar();
					document.getElementById("clock").innerHTML = this.countsToClock(storedCount);
					this.check(storedCount);
				}, 1000);
				isCounting = true;
			}
			// This is for starting a timer from the beginning
			else if (isPaused == false) {
				time = +document.getElementById("clock").innerHTML + ":00";
				let counts = clockToCounts(time);
				fullbar = counts;
				intervalID = setInterval(() => {
					counts--;
					storedCount = counts;
					this.moveBar();
					document.getElementById("clock").innerHTML = this.countsToClock(counts);
					this.check(counts);
				}, 1000);
				isCounting = true;
			}
		}
	}
}

function stop() {
	isPaused = false;
	isCounting = false;
	isStopped = true;
	clearInterval(intervalID);
	// console.log("stop", isPaused, isCounting, storedCount);
}

function pause() {
	isPaused = true;
	isCounting = false;
	clearInterval(intervalID);
	// console.log("pause", isPaused, isCounting, storedCount);
}

function reset() {
	isStopped = false;
	if (isCounting == false) {
		document.getElementById("clock").innerHTML =
			+document.getElementById("break").innerHTML + +document.getElementById("session").innerHTML;
		// Reset progress bar
		document.getElementById("bar").style.width = 100 + '%'; 
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

// A function to check countdown
function check(counts) {
	if (counts == 0) {
		this.stop();
		window.alert("Time is up!");
	}
}

// Progress Bar function
function moveBar() {
    var elem = document.getElementById("bar"); 
    var width = storedCount;
    elem.style.width = width/fullbar * 100 + '%';
}
