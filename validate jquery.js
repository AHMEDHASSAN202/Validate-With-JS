/**
 * Created by AHMED on 3/5/2017.
 */

$(function () {

    var form = $('#login')

    var name = $('#name');

    var email = $('#email');

    var password = $('#password');

    var c_password = $('#confirm_password');


    //event key up on name input
    name.on('keyup' , function () { validate_name(name); });

    //event key up on email input
    email.on('keyup' , function () { validate_email(email); });

    //event key up on password input
    password.on('keyup' , function () { validate_password(password); validate_confirm_password(password , c_password); });

    //event key up on confirm password input
    c_password.on('keyup' , function () { validate_confirm_password(password , c_password); });



    //event submit on main form
    form.on('submit' , function() {

        if (validate_name(name) == true && validate_email(email) == true && validate_password(password) && validate_confirm_password(password , c_password)) {

            //it means this name is bigger than 4
            //it means this email is bigger than 7
            //it means this password is bigger than 9
            //it means confirm password is same main password

            alert('true');
            /*
            * (here)
            * Send Data to Server
            * Send With Ajax
            *
            */

        }else {

            //it means this name is less than or equal 4
            //it means this emile is less than 7
            //it means this password is less than 9
            //it means confirm password is't same main password

            alert('false');
            /**
             * (here)
             * Apeare Message With Error
             *
             */

        }



    });


});

/* Validate Name ==============*/
/**
 * @param name
 * @return bool
 *
 */
function validate_name( name ) {

    var status = false;

    var regexName = /^[a-zA-Z ]+$/;

    if (name.val().length <= 4 || !(regexName).test(name.val()) ) {

        name.removeClass('valid-input');

        name.addClass('no-valid-input');

        name.next('p').remove();

        name.after('<p class="msg-no-valid">Oops! Allowed letter and whitespace only and your name must be bigger than 4</p>');

        status = false;

    }else {

        name.next('p').remove();

        name.removeClass('no-valid-input');

        name.addClass('valid-input');

        name.after('<p class="msg-valid">Valid Name</p>')

        status = true;

    }

    return status;

}


/* Validate Email ===============*/
/**
 * @param email
 *
 * @return bool
 *
 *
 */
function validate_email( email ) {

    var status = false;

    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (email.val().length < 7 || !(regexEmail.test(email.val())) ) {

        email.removeClass('valid-input');

        email.addClass('no-valid-input');

        email.next('p').remove();

        email.after('<p class="msg-no-valid">Please enter your valid email</p>');

        status = false;

    }else {

        email.next('p').remove();

        email.removeClass('no-valid-input');

        email.addClass('valid-input');

        email.after('<p class="msg-valid">Valid Email</p>')

        status = true;

    }

    return status;

}


/* Validate Password ===============*/
/**
 * @param passowrd
 *
 * @return bool
 *
 */
function validate_password( password ) {

    var status = false;

    var minNumberofChars = 8;
    var maxNumberofChars = 20;

   /*
    * his regex will enforce these rules:
    *
    * At least one upper case english letter, (?=.*?[A-Z])
    * At least one lower case english letter, (?=.*?[a-z])
    * At least one digit, (?=.*?[0-9])
    * At least one special character, (?=.*?[#?!@$%^&*-])
    * Minimum 8 in length .{8,} (with the anchors)
    *
    */
    var regexPassword = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");

    if (password.val().length <= minNumberofChars || password.val().length >= maxNumberofChars) {

        password.removeClass('valid-input');

        password.addClass('no-valid-input');

        password.next('p').remove();

        password.after('<p class="msg-no-valid">your password should is bigger than 9 and less than 20</p>');

        status = false;


    }else if (! (regexPassword.test(password.val()))) {

            password.removeClass('valid-input');

            password.addClass('no-valid-input');

            password.next('p').remove();

            password.after('<p class="msg-no-valid">password should contain atleast one [Numeric , Upper Case , Lower Case , Spacial Characters]</p>');

            status = false;

    } else {

            password.next('p').remove();

            password.removeClass('no-valid-imput');

            password.addClass('valid-input');

            password.after('<p class="msg-valid">Valid Password</p>')

            status = true;

        }

    return status;

}

/* Validate Confirm Password ============*/
/**
 * @Param main password
 * @param confirm password
 *
 * @return bool
 */
function validate_confirm_password(main_password , confirm_password) {

    if (validate_password(main_password) == true) {

        var status = false;

        if (main_password.val() != confirm_password.val()) {

            confirm_password.next('p').remove();

            confirm_password.after('<p class="msg-no-valid">Please type same password</p>');

            status = false;

        }else {

            confirm_password.next('p').remove();

            confirm_password.after('<p class="msg-valid">Same Password</p>');

            status = true

        }

        return status;

    }else {

        confirm_password.next('p').remove();

        return false;

    }

};