
// var points = 3;
// function addPoints(){
//     points+=7;
// console.log(points)
// }
// function removePoints(){

// }

// var fCard=4
// var sCard=5
// var cardName=fCard+sCard

// var score=21;
// if(score<21){
// console.log("You are out of the game.Try Again!")
// }
// else if(score==21){
// console.log("Congratulations! You have won.")
// }    
// else if(score>21){
// console.log("DO you want to draw a card?.")
// }     

let num1=8;
let num2=2;


var num1El=document.getElementById("num1")
var num2El=document.getElementById("num2")
var valueEl=document.getElementById("value-element")

let addStr="Addition is "
function add(){
    added=num1+num2;
    valueEl.textContent=addStr+added
    valueEl.style.color="green"
   
   
}
let subSt="Subtraction is "
function subtract(){
    subtracted=num1-num2;
   valueEl.textContent=subSt+subtracted
   valueEl.style.color="red"
 
}
let divideStr="Quotient is "
function divide(){
    divided=num1/num2;
    valueEl.textContent=divideStr+divided
    valueEl.style.color="yellow"
   
   
}
let multiplyStr="Multiple is "
function multiply(){
    multiplied=num1*num2;
    valueEl.textContent=multiplyStr+multiplied
    valueEl.style.color="blue"
   
   
}
let averageStr="Average is "
function average(){
    averaged=((num1+num2)/2)
    valueEl.textContent=averageStr+averaged
    valueEl.style.color='pink'
    
}