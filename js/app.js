"use strict";

var parse = "https://api.parse.com/1/classes/";
var appID = "nds0pUIxzvUALUX2bSTWMdIXo5KQpO8CWKbfIstK";
var RESTAPIKey = "ZDUcfvmGBx8yOGFDSLrM9IACOShw5fJFY1fEFDbt";

var submitbutton;
var buttonspinner;
var commentspinner;

function onReady() {
	document.getElementById("radio5").checked = true;

	submitbutton = document.getElementById("submit-button");
	buttonspinner = document.getElementById("buttonspinner");
	commentspinner = document.getElementById("commentspinner");
} //onReady

function onSubmit() {
	var rating = findRadioValue();

	var name = document.getElementById("name").value;
	if (name.trim().length == 0) {
		return;
	}

	var title = document.getElementById("title").value;
	if (title.trim().length == 0) {
		return;
	}

	var comment = document.getElementById("comment").value;
	if (comment.trim().length == 0) {
		return;
	}

	submitbutton.style.display = "none";
	buttonspinner.style.display = "initial";
} //onSubmit

function findRadioValue() {
	var radios = document.getElementsByName("rating");
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			return radios[i].value;
		}
	}
} //finRadioValue

document.addEventListener('DOMContentLoaded', onReady);
