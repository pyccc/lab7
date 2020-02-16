'use strict';

// const e = require("express");

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log($('.likeBtn'));
	$('.likeBtn').click(clickLikeBtn);
	
}

function clickLikeBtn(){
	console.log("calling");
	ga('create', 'UA-158628409-1', 'auto');
	ga("send", "event", 'like', 'click');
}