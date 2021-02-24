var calcEle = document.body.querySelector(".calculator");
var inputBill = Number(prompt("What is your bill?"));
var taxedBill = inputBill * 1.07;
var tip = taxedBill * 0.05;
var finalBill = taxedBill + tip;
calcEle.innerHTML = "Your final bill is $" + finalBill;