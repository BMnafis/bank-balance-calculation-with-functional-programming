// Log in page validation for user
document.getElementById('login-btn').addEventListener('click', function(){

    // get value of user email
    const emailInput = document.getElementById('email-input');
    const emailInputValue = emailInput.value;
    
    // get value of user password
    const passwordInput = document.getElementById('password-input');
    const passwordInputValue = passwordInput.value;

    // login condition
    if(emailInputValue == 'nafis@nafis.com' && passwordInputValue == 'nafis'){
        window.location.href = 'bank.html';
    }else{
        window.alert('Wrong Credentials! Try again')
    }
})