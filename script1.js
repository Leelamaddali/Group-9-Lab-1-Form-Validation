const formValidation = () => {

   
    let gender = document.querySelectorAll('input[name="gender"]:checked')
    let email_id = document.getElementById('emailid').value;
    let phone_number = document.getElementById('pnumber').value;
    let complete_form = document.getElementsByName('registration')[0];
    


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


    
    complete_form.reset();


}

const SubmitAlert = () => {
    alert("Registration Successful");
}
