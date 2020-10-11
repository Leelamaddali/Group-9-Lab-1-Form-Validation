const formValidation = () => {

    let f_name = document.getElementById('fname').value;
    let l_name = document.getElementById('lname').value;
    let user_id = document.getElementById('uid').value;
    

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

    
    complete_form.reset();

}
