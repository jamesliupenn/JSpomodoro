$(function() {
	// Add break length
	$("#break-plus").on("click", function(){
		let breakValue = $("#break").text();
		reset();
		$("#break").text(+breakValue + 1);
		$("#clock").text(+$("#break").text() + +$("#session").text());
	});
	// Minus break length
	$("#break-minus").on("click", function(){
		let breakValue = $("#break").text();
		reset();
		if (breakValue > 1) {
			$("#break").text(+breakValue - 1);
			$("#clock").text(+$("#break").text() + +$("#session").text());
		}
	});

	// Add session length
	$("#session-plus").on("click", function(){
		let sessionValue = $("#session").text();
		reset();
		$("#session").text(+sessionValue + 1);
		$("#clock").text(+$("#break").text() + +$("#session").text());
	});
	// Minus session legnth
	$("#session-minus").on("click", function(){
		let sessionValue = $("#session").text();
		reset();
		if (sessionValue > 1) {
			$("#session").text(+sessionValue - 1);
			$("#clock").text(+$("#break").text() + +$("#session").text());
		}
	});

	// Set delay and hide the preset ":00"
	$(".btn-success").on("click", function(){
		setTimeout(function() {
			$("#clock-hide").hide();
		}, 1000)
	});

	// On reset, show the ":00" back
	$(".btn-info").on("click", function(){
		$("#clock-hide").show();
	});
});