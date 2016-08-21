document.addEventListener('DOMContentLoaded', init)

function init(){
  result.innerHTML = "0";
  calcValue = "";
  currentOp = "";
  currentValue = "0";
}

var result = document.querySelector(".display");
var btns = document.querySelector(".buttons");

var currentOp = "";
var currentValue = "0";
var calcValue = "";

 btns.addEventListener("click",function(e){
   var btn = e.target;
   switch(btn.innerHTML) {
     case "0":
     case "1":
     case "2":
     case "3":
     case "4":
     case "5":
     case "6":
     case "7":
     case "8":
     case "9":
       {
         if(currentValue === "0") {
           currentValue = "";
         }
         currentValue += btn.innerHTML;
         break;
       }
     case "+":
     case "-":
     case "x":
     case "÷":
       {
         if(currentValue === "") {
           currentOp = btn.innerHTML;
         }
         else if(calcValue === "") {
           currentOp = btn.innerHTML;
           calcValue = currentValue;
           currentValue = "";
         }
         else {
           calculate();
           currentOp = btn.innerHTML;
         }
         break;
       }
     case "=":
       {
         calculate();
         break;
       }
     case "Cc":
       {
         init();
         break;
       }
     case ".":
       {
         if(currentValue.indexOf(".") === -1) {
           if(currentValue === "") {
             currentValue = "0";
           }
           currentValue += ".";
         }
         break;
       }
   }
   displayOnScreen();

 })

 function displayOnScreen()  {
   result.innerHTML = calcValue + currentOp + currentValue;
 }

function calculate() {
  if(currentValue.substr(currentValue.length - 1) === ".") {
    currentValue += "0";
  }
  switch (currentOp) {
    case "+":
      calcValue = parseFloat(calcValue) + parseFloat(currentValue);
      break;
    case "-":
      calcValue = parseFloat(calcValue) - parseFloat(currentValue);
      break;
    case "x":
      calcValue = parseFloat(calcValue) * parseFloat(currentValue);
      break;
    case "÷":
      calcValue = parseFloat(calcValue) / parseFloat(currentValue);
      break;

  }
  currentOp = "";
  currentValue = "";
}
