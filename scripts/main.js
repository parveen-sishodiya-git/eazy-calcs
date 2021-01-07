console.log("Hey, I am eazy-calcs");


let items = ["Amul Small","Amul Big","Cow Milk","Chach"];

let itemString = items[0] + items[1] + items[2] + items[3];

//item prices
let smallAmulPrice = 55;
let bigAmulPrice = 54;
let cowMilkPrice = 47;
let chachPrice = 19;

//item value seleted by user
let smallAmul = document.getElementById("smallAmul").value;
let bigAmul = document.getElementById("bigAmul").value;
let cowMilk = document.getElementById("cowMilk").value;
let chach = document.getElementById("chach").value;

//item total  =  value * price
let smallAmulTotal = (smallAmulPrice * smallAmul);
let bigAmulTotal = (bigAmulPrice * bigAmul);
let cowMilkTotal = (cowMilkPrice * cowMilk);
let chachTotal = (chachPrice * chach);
let totalBillValue = smallAmulTotal + bigAmulTotal + cowMilkTotal + chachTotal;

printValues();
totalBill();
document.getElementById("billReport").innerHTML = billReport();
document.getElementById("billReportTotal").innerHTML = billReportTotal();

document.getElementById("smallAmul").addEventListener("input",()=>{smallAmul = document.getElementById("smallAmul").value;printValues();totalBill()})
document.getElementById("bigAmul").addEventListener("input",()=>{bigAmul = document.getElementById("bigAmul").value;printValues();totalBill()})
document.getElementById("cowMilk").addEventListener("input",()=>{cowMilk = document.getElementById("cowMilk").value;printValues();totalBill()})
document.getElementById("chach").addEventListener("input",()=>{chach = document.getElementById("chach").value;printValues();totalBill()})

function printValues() {
console.log("Small Amul = "+smallAmul);
console.log("Big Amul = "+bigAmul);
console.log("Cow Milk = "+cowMilk);
console.log("Chach = "+chach);
}

function totalBill(){
    smallAmulTotal = (smallAmulPrice * smallAmul);
    bigAmulTotal = (bigAmulPrice * bigAmul);
    cowMilkTotal = (cowMilkPrice * cowMilk);
    chachTotal = (chachPrice * chach);
    
    totalBillValue = smallAmulTotal + bigAmulTotal + cowMilkTotal + chachTotal;
    console.log(totalBillValue);
    document.getElementById("totalBill").innerHTML = `<h1>`+totalBillValue+`<span>/-</span></h1>`;
    document.getElementById("billReport").innerHTML = billReport();
    document.getElementById("billReportTotal").innerHTML = billReportTotal();
}

function billReport() {
    return `<table class="table-striped">
    <tbody>
      <tr>
      <th><h3>`+items[0]+` : </h3></th>
      <th><h3>`+smallAmul+`</h3></th>
      <th><h3>X</h3></th>
      <th><h3>`+smallAmulPrice+`</h3></th>
      <th><h3>=</h3></th>
      <th><h3>`+smallAmulTotal+`</h3></th>
      </tr>
      
      <tr>
      <th><h3>`+items[1]+` : </h3></th>
      <th><h3>`+bigAmul+`</h3></th>
      <th><h3>X</h3></th>
      <th><h3>`+bigAmulPrice+`</h3></th>
      <th><h3>=</h3></th>
      <th><h3>`+bigAmulTotal+`</h3></th>
      </tr>
      
      
      <tr>
      <th><h3>`+items[2]+` : </h3></th>
      <th><h3>`+cowMilk+`</h3></th>
      <th><h3>X</h3></th>
      <th><h3>`+cowMilkPrice+`</h3></th>
      <th><h3>=</h3></th>
      <th><h3>`+cowMilkTotal+`</h3></th>
      </tr>
      
      <tr>
      <th><h3>`+items[3]+` : </h3></th>
      <th><h3>`+chach+`</h3></th>
      <th><h3>X</h3></th>
      <th><h3>`+chachPrice+`</h3></th>
      <th><h3>=</h3></th>  
      <th><h3>`+chachTotal+`</h3></th>
      
        </tr>
            
    </tbody>
  </table>`;
}

function billReportTotal() {
    return `<table class="table-striped">
    <tbody>
      <tr>
      <th><h1>Total : </h1></th>
      <th><h3></h3></th>
      <th><h3></h3></th>
      <th><h3></h3></th>
      <th><h3></h3></th>
      <th><h1>`+totalBillValue+`/-</h1></th>
      </tr>   
    </tbody>
  </table>`;
}



