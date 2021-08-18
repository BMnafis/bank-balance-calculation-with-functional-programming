// Calculation of deposit Amount
document.getElementById('deposit-btn').addEventListener('click', function(){

    // get the value of deposit input
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    
    // get the value of total deposit secton
    const depositTotal = document.getElementById('total-deposit');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    // Total deposit calculation
    const totalDepositAmount = newDepositAmount + previousDepositAmount;
    depositTotal.innerText = totalDepositAmount;

    // Total withdraw calculation after deposit
    let balanceTotal = document.getElementById('total-balance');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    
    const totalBalanceAmount = newDepositAmount + previousBalanceAmount;
    balanceTotal.innerText = totalBalanceAmount;

    // clear deposit field
    depositInput.value = '';
})

// Calculation of withdraw amount
document.getElementById('withdraw-btn').addEventListener('click', function(){
    
    // get the value of withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);

    // get total previous withdraw value
    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdrawText = totalWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    
    // Calculation of total withdraw balance
    const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    totalWithdraw.innerText = totalWithdrawAmount;

    // Calculation of total balance after withdraw
    let previousBalance = document.getElementById('total-balance');
    const previousBalanceAmount = parseFloat(previousBalance.innerText);

    const totalBalance = previousBalanceAmount - newWithdrawAmount;
    previousBalance.innerText = totalBalance;

    // Clear withdraw field
    withdrawInput.value = '';
})