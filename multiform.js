"use strict"


const form1= document.getElementById("form1");
const form2= document.getElementById("form2");
const form3= document.getElementById("form3");

const progressEl = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let currentActive= 1;


//====================================== Next form ===================================================
function nextOne() {
    form1.style.left = "-450px";
    form2.style.left = "25px";
//============== next progress number
currentActive ===
}

//=======================================back One ========================================================
function bacKOne(){
    form1.style.left = "25px";
    form2.style.left = "450px";
} 

//========================================== Second Form================================================
function nextTwo(){
    form2.style.left = "-450px";
    form3.style.left = "25px";
}

//=======================================back One ========================================================
function bacKTwo(){
    form2.style.left = "25px";
    form3.style.left = "450px";
} 


//===========================btn Events==============================
const btnsEvents= ()=>{
    const next1= document.getElementById("next1");
    const next2= document.getElementById("next2");
    const back1= document.getElementById("back1");
    const back2= document.getElementById("back2");

    //next1
    next1.addEventListener("click", nextOne);

    // back1
    back1.addEventListener("click", backOne);

    //next2
    next2.addEventListener("click", nextTwo);

    // back2
    back2.addEventListener("click", backTwo);
};

document.addEventListener("DOMContentLoaded", btnsEvents);