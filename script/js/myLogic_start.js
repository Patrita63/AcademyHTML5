"use strict";
/* Aggiungere jquery */
/*
$(document).ready(function() {
	alert("Page is loaded document ready");
   console.log( "ready!" );
});
*/


var length = 16;                               // Number
let lastName = "Johnson";                      // String
let x = {firstName:"John", lastName:"Doe"};    // Object

function ViewRegione() {
  // alert("Page is loaded");
  var divReg = document.getElementById("divRegione");
  // debugger;
  if(divReg != undefined) {
	// divReg.hidden = 0;
	divReg.style.visibility = "visible";
  }
  
  var divProv = document.getElementById("divProvincia");
  // divProv.hidden = 1; // style.display = "hidden";
  divProv.style.visibility = "hidden";
  
  var divCom = document.getElementById("divComune");
  // divCom.hidden = 1; 
  divCom.style.visibility = "hidden";
}