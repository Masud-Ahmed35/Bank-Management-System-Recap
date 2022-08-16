
document.getElementById("btn-withdraw").addEventListener("click", function () {

    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawTotal = parseFloat(withdrawField.value);
    withdrawField.value = '';

    if (isNaN(newWithdrawTotal)) {
        alert("Please Enter a Number!!!");
        return;
    }

    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    if (newWithdrawTotal > previousBalanceTotal) {
        alert("Eto Taka Nai re Vaiii...!!!!");
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    balanceTotalElement.innerText = currentBalanceTotal;

})