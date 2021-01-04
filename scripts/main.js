console.log("Hey, I am eazy-calcs");


let items = ["Amul Small","Amul Big","Cow Milk","Chach"];

let itemString = items[0] + items[1] + items[2] + items[3];

let smallAmulPrice = 55;
let bigAmulPrice = 54;
let cowMilkPrice = 47;
let chachPrice = 19;


let smallAmul = document.getElementById("smallAmul").value;
let bigAmul = document.getElementById("bigAmul").value;
let cowMilk = document.getElementById("cowMilk").value;
let chach = document.getElementById("chach").value;

printValues();
totalBill();

document.getElementById("smallAmul").addEventListener("change",()=>{smallAmul = document.getElementById("smallAmul").value;printValues();totalBill()})
document.getElementById("bigAmul").addEventListener("change",()=>{bigAmul = document.getElementById("bigAmul").value;printValues();totalBill()})
document.getElementById("cowMilk").addEventListener("change",()=>{cowMilk = document.getElementById("cowMilk").value;printValues();totalBill()})
document.getElementById("chach").addEventListener("change",()=>{chach = document.getElementById("chach").value;printValues();totalBill()})

function printValues() {
console.log("Small Amul = "+smallAmul);
console.log("Big Amul = "+bigAmul);
console.log("Cow Milk = "+cowMilk);
console.log("Chach = "+chach);
}

function totalBill(){
    let totalBill = (smallAmulPrice * smallAmul) + (bigAmulPrice * bigAmul) + (cowMilkPrice * cowMilk) + (chachPrice * chach);
    console.log(totalBill);
    document.getElementById("totalBill").innerHTML = `<h1>`+totalBill+`<span>/-</span></h1>`;
}