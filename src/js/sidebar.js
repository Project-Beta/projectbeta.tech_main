var aboutButton = document.querySelector(".links li:nth-child(2)");
var eventsButton = document.querySelector(".links li:nth-child(6)");
var filesButton = document.querySelectorAll(".subject")[0];
var countdownButton = document.querySelectorAll(".subject")[1];
var socialButton = document.querySelectorAll(".subject")[2];

function about() {
	var triDiv = document.querySelector("#aboutTriangle");
	var level2 = document.querySelectorAll(".level2.about");
	if (triDiv.classList.contains('closed')) {
		triDiv.classList.remove('closed');
		triDiv.classList.add('open');
		for (var i = 0; i < level2.length; i++) {
			level2[i].classList.remove("nodisplay");
		}
	}
	else {
		triDiv.classList.remove('open');
		triDiv.classList.add('closed');
		for (var i = 0; i < level2.length; i++) {
			level2[i].classList.add("nodisplay");
		}
	}
}
function events() {
	var triDiv = document.querySelector("#eventsTriangle");
	var level2 = document.querySelectorAll(".level2.events");
	if (triDiv.classList.contains('closed')) {
		triDiv.classList.remove('closed');
		triDiv.classList.add('open');
		for (var i = 0; i < level2.length; i++) {
			level2[i].classList.remove("nodisplay");
		}
	}
	else {
		triDiv.classList.remove('open');
		triDiv.classList.add('closed');
		for (var i = 0; i < level2.length; i++) {
			level2[i].classList.add("nodisplay");
		}
	}
}
function files() {
	var triDiv = document.querySelector("#filesTriangle");
	var container = document.querySelector(".links");
	if (triDiv.classList.contains('closed')) {
		triDiv.classList.remove('closed');
		triDiv.classList.add('open');
		container.classList.remove("nodisplay");
		countdownButton.style.borderTop = "1px solid #0e0f10";
	}
	else {
		triDiv.classList.remove('open');
		triDiv.classList.add('closed');
		container.classList.add("nodisplay");
		countdownButton.style.borderTop = 'none'; 
	}
}
function countdown() {
	var triDiv = document.querySelector("#countdownTriangle");
	var container = document.querySelector(".countdown");
	if (triDiv.classList.contains('closed')) {
		triDiv.classList.remove('closed');
		triDiv.classList.add('open');
		container.classList.remove("nodisplay");
		countdownButton.style.borderBottom = "1px solid #0e0f10"; 
	}
	else {
		triDiv.classList.remove('open');
		triDiv.classList.add('closed');
		container.classList.add("nodisplay");
		countdownButton.style.borderBottom = 'none';
	}
}
function social() {
	var triDiv = document.querySelector("#socialTriangle");
	var container = document.querySelector(".social");
	if (triDiv.classList.contains('closed')) {
		triDiv.classList.remove('closed');
		triDiv.classList.add('open');
		container.classList.remove("nodisplay");
	}
	else {
		triDiv.classList.remove('open');
		triDiv.classList.add('closed');
		container.classList.add("nodisplay");
	}
}
aboutButton.addEventListener('click', about);
eventsButton.addEventListener('click', events);
filesButton.addEventListener('click', files);
countdownButton.addEventListener('click', countdown);
socialButton.addEventListener('click', social);

var end = new Date('08/18/2018 0:0 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

var daysElement = document.querySelector('.days p');
var hoursElement = document.querySelector('.hours p');
var minutesElement = document.querySelector('.minutes p');
var secondsElement = document.querySelector('.seconds p');

function showRemaining() {
	var now = new Date();
	var distance = end - now;
	if (distance < 0) {

		clearInterval(timer);
		document.getElementById('countdown').innerHTML = 'EXPIRED!';

		return;
	}
	var days = Math.floor(distance / _day);
	var hours = Math.floor((distance % _day) / _hour);
	var minutes = Math.floor((distance % _hour) / _minute);
	var seconds = Math.floor((distance % _minute) / _second);

	days < 10 ? daysElement.innerHTML = "0" + days : daysElement.innerHTML = days;
	hours < 10 ? hoursElement.innerHTML = "0" + hours : hoursElement.innerHTML = hours;
	minutes < 10 ? minutesElement.innerHTML = "0" + minutes : minutesElement.innerHTML = minutes;
	seconds < 10 ? secondsElement.innerHTML = "0" + seconds : secondsElement.innerHTML = seconds;
}

timer = setInterval(showRemaining, 1000);