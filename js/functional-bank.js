function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueText = inputValue.value;
    const inputValueAmount = parseFloat(inputValueText);
    // clear input field
    inputValue.value = '';

    return inputValueAmount;
}

function getTotalValue(totalId , amount){
    const previousAmount = document.getElementById(totalId);
    const previousAmountText = previousAmount.innerText;
    const previousAmountNumber = parseFloat(previousAmountText);

    previousAmount.innerText = previousAmountNumber + amount;
}

function getCurrnetBalance(){
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    return totalBalanceAmount;
}

function updateTotalBalance(inputAmount, isAdd){
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceAmount = getCurrnetBalance();

    if(isAdd == true){
        totalBalance.innerText = totalBalanceAmount + inputAmount
    }else{
        totalBalance.innerText = totalBalanceAmount - inputAmount
    }  
}

document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');
    // Error handling
    if(depositAmount > 0){
        getTotalValue('total-deposit', depositAmount);
        updateTotalBalance(depositAmount, true);
    }
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrnetBalance();
    // Error handling
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        getTotalValue('total-withdraw', withdrawAmount);
        updateTotalBalance(withdrawAmount, false);
        document.getElementById('withdraw-error').innerText = '';
    }
    if(withdrawAmount > currentBalance){
        let error = document.getElementById('withdraw-error');
        error.innerText = 'Insufficient Balance!'  
    }
})