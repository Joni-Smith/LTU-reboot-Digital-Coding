var preTip = 30.00;

var tipPercentage = 12.5;

var percentageOfPreTip = ( preTip * tipPercentage )/ 100;

var TotalBill = "Your total bill, including tip is £" + preTip + percentageOfPreTip;

document.write(TotalBill);

