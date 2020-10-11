const formValidation = () => {

   
    let gender = document.querySelectorAll('input[name="gender"]:checked')
    let email_id = document.getElementById('emailid').value;
    let phone_number = document.getElementById('pnumber').value;
    let user_pass = document.getElementById('pass').value;
    let confirm_pass = document.getElementById('cpass').value;
    let complete_form = document.getElementsByName('registration')[0];
    

    if (isNaN(phone_number)) {
        alert( " ** phone number should contain only numbers");
        return false;
    }
    if (phone_number.length != 10) {
        alert(" ** Phone number must have only 10 digits");
        return false;
    }
    
    // password validation
    if ( user_pass.length <= 5) {
        alert (" ** Password should not be empty and length greater than 5");
        return false;
    }


    if (( user_pass != confirm_pass)) {
        alert(" ** confirm Password should not empty and does not match the password");
        return false;
    }

    
    complete_form.reset();


}

const SubmitAlert = () => {
    alert("Registration Successful");
}
