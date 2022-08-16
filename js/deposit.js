
document.getElementById("btn-deposit").addEventListener("click", function () {
    const depositField = document.getElementById("deposit-field");
    const NewDepositTotal = parseFloat(depositField.value);
    depositField.value = '';

    if (isNaN(NewDepositTotal)) {
        alert("Please Enter a Number!!!");
        return;
    }

    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);

    const currentDepositTotal = previousDepositTotal + NewDepositTotal;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    const currentBalanceTotal = previousBalanceTotal + NewDepositTotal;
    balanceTotalElement.innerText = currentBalanceTotal;

})