const formValidation = () => {

    let f_name = document.getElementById('fname').value;
    let l_name = document.getElementById('lname').value;
    let user_id = document.getElementById('uid').value;
    let gender = document.querySelectorAll('input[name="gender"]:checked')
    let email_id = document.getElementById('emailid').value;
    let phone_number = document.getElementById('pnumber').value;
    let user_pass = document.getElementById('pass').value;
    let confirm_pass = document.getElementById('cpass').value;
    let complete_form = document.getElementsByName('registration')[0];
    

    // first name and last name validation
    if (f_name == "") {
        alert(" ** Please enter first name");
        return false;
    }
    if (f_name.length <= 3) {
        alert(" ** firstname lenght must be greater than 3");
        return false;
    }
    if (l_name == "") {
        alert( " ** Please enter last name");
        return false;
    }
    // userid validation
    if (user_id == "") {
        alert(" ** Please enter user id");
        return false;
    }

    // gender
     if (!gender.length) {
     alert('You must select male or female');
     return false;
 }

    // email id validation
    if (email_id == "") {
        alert( " ** Please enter emailid");
        return false;
    }
    if (email_id.indexOf('@') <= 0) {
        alert( " ** Please enter valid email address");
        return false;
    }

    // Phone number validation
    if (phone_number == "") {
        alert( " ** Please enter your phone number");
        return false;
    }
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
