document.addEventListener("DOMContentLoaded", function () {
    const billTotal = document.getElementById("billTotal");
    const tip = document.getElementById("tip");
    const tipPercentage = document.getElementById("tipPercentage");
    const tipAmount = document.getElementById("tipAmount");
    const totalBill = document.getElementById("totalBill");
    const tipForm = document.getElementById("tipForm");

    // Function to update the tip percentage input when the range input is changed
    tip.addEventListener("input", function () {
        tipPercentage.value = tip.value;
        // Show an error message if the tip slider is moved
        tipPercentage.setCustomValidity("Tip Percentage must remain at 0 until the form is submitted");
    });

    // Function to calculate tip and total when any input is changed
    tipForm.addEventListener("input", function () {
        const billValue = parseFloat(billTotal.value);
        const tipValue = parseInt(tip.value);
        if (!isNaN(billValue)) {
            const tipAmountValue = (billValue * tipValue) / 100;
            const totalValue = billValue + tipAmountValue;
            tipAmount.value = tipAmountValue.toFixed(2);
            totalBill.value = totalValue.toFixed(2);
        } else {
            alert('Please enter a valid number for bill total');
            return;
        }
    });
});
