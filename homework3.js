/* 
 Name: Christian Martinez
 File: homework2.js
 Date Created: 2025-04-10
 Date Updated: 2025-04-10
 Purpose: Validate data on the fly from a form
*/

// First Name Validation 
function validateFname() {
    let firstName = document.getElementById("fname");
    let firstNameError = document.getElementById("fname-error");
   
    if (firstName.value.trim().length === 0) {
        firstNameError.innerHTML = "First name cannot be blank";
        return false;
    } else if (!firstName.checkValidity()) {
        firstNameError.innerHTML = "First name can only contain letters and apostrophes";
        return false;
    } else {
        firstNameError.innerHTML = "";
        return true;
    }
}

// Middle Initial Validation 
function validateMini() {
    let middleInitial = document.getElementById("mini");
    let middleInitialError = document.getElementById("mini-error");
   
    if (middleInitial.value.length > 0 && !middleInitial.checkValidity()) {
        middleInitialError.innerHTML = "Middle initial can only be a letter";
        return false;
    } else {
        middleInitialError.innerHTML = "";
        return true;
    }
}

// Last Name Validation 
function validateLname() {
    let lastName = document.getElementById("lname");
    let lastNameError = document.getElementById("lname-error");
   
    if (lastName.value.trim().length === 0) {
        lastNameError.innerHTML = "Last name cannot be blank";
        return false;
    } else if (!lastName.checkValidity()) {
        lastNameError.innerHTML = "Last name can only contain letters, apostrophes, and numbers 2-5";
        return false;
    } else {
        lastNameError.innerHTML = "";
        return true;
    }
}

// Date of Birth Validation
function validateDob() {
    let dateOfBirth = document.getElementById("dob");
    let dateOfBirthError = document.getElementById("dob-error");
   
    let inputDate = new Date(dateOfBirth.value);
    let oldestAllowed = new Date().setFullYear(new Date().getFullYear() - 120);

    if (inputDate > new Date()) {
        dateOfBirthError.innerHTML = "Date can't be in the future";
        dateOfBirth.value = "";
        return false;
    } else if (inputDate < new Date(oldestAllowed)) {
        dateOfBirthError.innerHTML = "Date can't be more than 120 years ago";
        dateOfBirth.value = "";
        return false;
    } else {
        dateOfBirthError.innerHTML = "";
        return true;
    }
}

// Social Security Number Validation
function validateSsn() {
    let ssnInput = document.getElementById("ssn");
    let ssnError = document.getElementById("ssn-error");
    let ssnDigits = ssnInput.value.replace(/\D/g, "");
   
    if (ssnDigits.length !== 9) {
        ssnError.innerHTML = "Please enter a valid 9-digit SSN";
        return false;
    } else {
        ssnInput.value = `${ssnDigits.substring(0, 3)}-${ssnDigits.substring(3, 5)}-${ssnDigits.substring(5, 9)}`;
        ssnError.innerHTML = "";
        return true;
    }
}

// Address Line 1 Validation
function validateAddress1() {
    let address1 = document.getElementById("address1");
    let address1Error = document.getElementById("address1-error");
   
    if (address1.value.length < 2) {
        address1Error.innerHTML = "Address must be at least 2 characters";
        return false;
    } else {
        address1Error.innerHTML = "";
        return true;
    }
}

// Address Line 2 Validation
function validateAddress2() {
    document.getElementById("address2-error").innerHTML = "";
    return true;
}

// Zip Code Validation Function
function validateZcode() {
    let zipInput = document.getElementById("zcode");
    let zipError = document.getElementById("zcode-error");
    let zipDigits = zipInput.value.replace(/[^\d-]/g, "");

    if (!zipDigits) {
        zipError.innerHTML = "Please correct errors";
        return false;
    }

    if (zipDigits.length > 5) {
        zipInput.value = `${zipDigits.slice(0, 5)}-${zipDigits.slice(5, 9)}`;
    } else {
        zipInput.value = zipDigits.slice(0, 5);
    }

    zipError.innerHTML = "";
    return true;
}

// Phone Number Validation 
function validatePhone() {
    let phoneInput = document.getElementById("phone");
    let phoneError = document.getElementById("phone-error");
   
    if (!phoneInput.checkValidity()) {
        phoneError.innerHTML = "Please enter a valid phone number (format: 123-456-7890)";
        return false;
    } else {
        phoneError.innerHTML = "";
        return true;
    }
}

// Phone Number Formatting
function formatPhoneNumber(input) {
    let phoneDigits = input.value.replace(/\D/g, "");
    
    if (phoneDigits.length > 0) {
        if (phoneDigits.length <= 3) {
            input.value = phoneDigits;
        } else if (phoneDigits.length <= 6) {
            input.value = `${phoneDigits.substring(0, 3)}-${phoneDigits.substring(3)}`;
        } else {
            input.value = `${phoneDigits.substring(0, 3)}-${phoneDigits.substring(3, 6)}-${phoneDigits.substring(6, 10)}`;
        }
    }
}


document.getElementById("phone").addEventListener('input', function() {
    formatPhoneNumber(this);
});

// Email Validation 
function validateEmail() {
    let emailInput = document.getElementById("email");
    let emailError = document.getElementById("email-error");
   
    if (!emailInput.checkValidity()) {
        emailError.innerHTML = "Please enter a valid email address";
        return false;
    } else {
        emailError.innerHTML = "";
        return true;
    }
}

// User ID Validation 
function validateUid() {
    let userIdInput = document.getElementById("uid");
    let userIdError = document.getElementById("uid-error");
   
    userIdInput.value = userIdInput.value.toLowerCase();

    if (userIdInput.value.length === 0) {
        userIdError.innerHTML = "User ID can't be blank";
        return false;
    }

    if (!isNaN(userIdInput.value.charAt(0))) {
        userIdError.innerHTML = "User ID can't start with a number";
        return false;
    }

    let validChars = /^[a-zA-Z0-9_-]+$/;
    if (!validChars.test(userIdInput.value)) {
        userIdError.innerHTML = "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (userIdInput.value.length < 5) {
        userIdError.innerHTML = "User ID must be at least 5 characters";
        return false;
    } else if (userIdInput.value.length > 30) {
        userIdError.innerHTML = "User ID can't exceed 30 characters";
        return false;
    } else {
        userIdError.innerHTML = "";
        return true;
    }
}

// Password Validation 
// Password Validation
function validatePword() {
    let passwordInput = document.getElementById("pword").value;
    let userId = document.getElementById("uid").value;
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let passwordError = document.getElementById("pword-error");
    let messages = [];
   
    // Clear existing messages
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`msg${i}`).innerHTML = "";
    }
   
    // Check password length
    passwordInput.length < 8 && messages.push("Password must be at least 8 characters");
    
    // Check for required character types
    !passwordInput.match(/[a-z]/) && messages.push("Enter at least one lowercase letter");
    !passwordInput.match(/[A-Z]/) && messages.push("Enter at least one uppercase letter");
    !passwordInput.match(/[0-9]/) && messages.push("Enter at least one number");
    
    // Check for special characters but exclude quotes
    !passwordInput.match(/[!@#%^&*\(\)\-_+=\\\/><.,`~]/) && 
        messages.push("Enter at least one special character (!@#%^&*()-_+=\\><.,`~)");
    
    // Disallow quotes explicitly
    passwordInput.match(/["']/) && 
        messages.push("Password cannot contain quotes");
   
    // Check if password contains user ID or name elements
    if (userId && (
        passwordInput.includes(userId) || 
        (firstName && passwordInput.toLowerCase().includes(firstName.toLowerCase())) || 
        (lastName && passwordInput.toLowerCase().includes(lastName.toLowerCase()))
    )) {
        messages.push("Password cannot contain your user ID or name");
    }
   
    // Display up to 4 error messages
    messages.slice(0, 4).forEach((msg, idx) => {
        document.getElementById(`msg${idx+1}`).innerHTML = msg;
    });
   
    return messages.length === 0;
}

// Password Confirmation
function confirmPword() {
    let password = document.getElementById("pword").value;
    let confirmPassword = document.getElementById("pword2").value;
    let confirmError = document.getElementById("pword2-error");
   
    if (password !== confirmPassword) {
        confirmError.innerHTML = "Passwords do not match";
        return false;
    } else {
        confirmError.innerHTML = "";
        return true;
    }
}

// Initialize pain slider
document.addEventListener('DOMContentLoaded', function() {
    let painSlider = document.getElementById("painLevel");
    let valueDisplay = document.querySelector(".slider-value");
   
    if (painSlider && valueDisplay) {
        // Update display on input change
        painSlider.addEventListener('input', function() {
            valueDisplay.textContent = `${this.value}/10`;
        });
       
        // Set initial value
        valueDisplay.textContent = `${painSlider.value}/10`;
    }
});

// Form Review 
function reviewInput() {
    let form = document.getElementById("signup");
    let formSummary = "<table class='output'><th colspan='2'>Review Your Information:</th>";
   
    // Loop through form elements
    Array.from(form.elements).forEach(element => {
        if (element.value !== "" && !["button", "submit", "reset"].includes(element.type)) {
            switch (element.type) {
                case "checkbox":
                    if (element.checked) {
                        formSummary += `<tr><td align='right'>${element.name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (element.checked) {
                        formSummary += `<tr><td align='right'>${element.name}</td><td>${element.value}</td></tr>`;
                    }
                    break;
                case "password":
                    formSummary += `<tr><td align='right'>${element.name}</td><td>********</td></tr>`;
                    break;
                default:
                    formSummary += `<tr><td align='right'>${element.name}</td><td>${element.value}</td></tr>`;
            }
        }
    });
   
    formSummary += "</table>";
    document.getElementById("showInput").innerHTML = formSummary;
}

// Clear Review Display
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}