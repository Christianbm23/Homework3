/* 
 Name: Christian Martinez
 File: homework3.js
 Date Created: 2025-04-10
 Date Updated: 2025-04-10
 Purpose: Validate data on the fly from a form
*/

/* 
 Name: Christian Martinez
 File: homework3.js
 Date Created: 2025-04-10
 Date Updated: 2025-04-11
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
        firstNameError.innerHTML = "First name can only contain letters, apostrophes, and dashes";
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
        lastNameError.innerHTML = "Last name can only contain letters, apostrophes, and dashes";
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
   
    if (!dateOfBirth.value) {
        dateOfBirthError.innerHTML = "Date of birth is required";
        return false;
    }
    
    let inputDate = new Date(dateOfBirth.value);
    let today = new Date();
    let oldestAllowed = new Date();
    oldestAllowed.setFullYear(today.getFullYear() - 120);

    if (inputDate > today) {
        dateOfBirthError.innerHTML = "Date can't be in the future";
        return false;
    } else if (inputDate < oldestAllowed) {
        dateOfBirthError.innerHTML = "Date can't be more than 120 years ago";
        return false;
    } else {
        dateOfBirthError.innerHTML = "";
        return true;
    }
}

// Social Security Number Validation and Formatting
function validateSsn() {
    let ssnInput = document.getElementById("ssn");
    let ssnError = document.getElementById("ssn-error");
    let ssnDigits = ssnInput.value.replace(/\D/g, "");
   
    if (ssnDigits.length !== 9) {
        ssnError.innerHTML = "Please enter a valid 9-digit SSN";
        return false;
    } else {
        // Format as XXX-XX-XXXX
        ssnInput.value = `${ssnDigits.substring(0, 3)}-${ssnDigits.substring(3, 5)}-${ssnDigits.substring(5, 9)}`;
        ssnError.innerHTML = "";
        return true;
    }
}

// Format SSN as user types
function formatSsn(input) {
    let ssnDigits = input.value.replace(/\D/g, "");
    
    if (ssnDigits.length > 0) {
        if (ssnDigits.length <= 3) {
            input.value = ssnDigits;
        } else if (ssnDigits.length <= 5) {
            input.value = `${ssnDigits.substring(0, 3)}-${ssnDigits.substring(3)}`;
        } else {
            input.value = `${ssnDigits.substring(0, 3)}-${ssnDigits.substring(3, 5)}-${ssnDigits.substring(5, 9)}`;
        }
    }
}

// Address Line 1 Validation
function validateAddress1() {
    let address1 = document.getElementById("address1");
    let address1Error = document.getElementById("address1-error");
   
    if (address1.value.trim().length === 0) {
        address1Error.innerHTML = "Address is required";
        return false;
    } else if (address1.value.length < 2) {
        address1Error.innerHTML = "Address must be at least 2 characters";
        return false;
    } else if (address1.value.length > 30) {
        address1Error.innerHTML = "Address cannot exceed 30 characters";
        return false;
    } else if (!address1.checkValidity()) {
        address1Error.innerHTML = "Please enter a valid address";
        return false;
    } else {
        address1Error.innerHTML = "";
        return true;
    }
}

// Address Line 2 Validation
function validateAddress2() {
    let address2 = document.getElementById("address2");
    let address2Error = document.getElementById("address2-error");
   
    if (address2.value.length > 0) {
        if (address2.value.length < 2) {
            address2Error.innerHTML = "Address must be at least 2 characters";
            return false;
        } else if (address2.value.length > 30) {
            address2Error.innerHTML = "Address cannot exceed 30 characters";
            return false;
        } else if (!address2.checkValidity()) {
            address2Error.innerHTML = "Please enter a valid address";
            return false;
        }
    }
    address2Error.innerHTML = "";
    return true;
}

// City Validation
function validateCity() {
    let city = document.getElementById("city");
    let cityError = document.getElementById("city-error");
    
    if (city.value.trim().length === 0) {
        cityError.innerHTML = "City is required";
        return false;
    } else if (city.value.length < 2) {
        cityError.innerHTML = "City must be at least 2 characters";
        return false;
    } else if (city.value.length > 30) {
        cityError.innerHTML = "City cannot exceed 30 characters";
        return false;
    } else if (!city.checkValidity()) {
        cityError.innerHTML = "City can only contain letters, spaces, hyphens, and apostrophes";
        return false;
    } else {
        cityError.innerHTML = "";
        return true;
    }
}

// State Validation
function validateState() {
    let state = document.getElementById("state");
    let stateError = document.getElementById("state-error");
    
    if (state.value === "") {
        stateError.innerHTML = "Please select a state";
        return false;
    } else {
        stateError.innerHTML = "";
        return true;
    }
}

// Zip Code Validation and Formatting
function validateZcode() {
    let zipInput = document.getElementById("zcode");
    let zipError = document.getElementById("zcode-error");
    let zipValue = zipInput.value.replace(/[^\d-]/g, "");

    if (zipValue.trim().length === 0) {
        zipError.innerHTML = "Zip code is required";
        return false;
    }
    
    if (!zipInput.checkValidity()) {
        zipError.innerHTML = "Please enter a valid 5-digit or 9-digit zip code (format: 12345 or 12345-6789)";
        return false;
    }

    // Format as XXXXX or XXXXX-XXXX
    if (zipValue.includes("-")) {
        let parts = zipValue.split("-");
        if (parts[0].length === 5 && parts[1].length <= 4) {
            zipInput.value = `${parts[0]}-${parts[1]}`;
        }
    } else if (zipValue.length > 5) {
        zipInput.value = `${zipValue.slice(0, 5)}-${zipValue.slice(5, 9)}`;
    } else {
        zipInput.value = zipValue.slice(0, 5);
    }

    zipError.innerHTML = "";
    return true;
}

// Format zip code as user types
function formatZipCode(input) {
    let zipDigits = input.value.replace(/[^\d-]/g, "");
    
    if (zipDigits.length > 5 && !zipDigits.includes("-")) {
        input.value = `${zipDigits.slice(0, 5)}-${zipDigits.slice(5, 9)}`;
    } else {
        input.value = zipDigits;
    }
}

// Phone Number Validation and Formatting
function validatePhone() {
    let phoneInput = document.getElementById("phone");
    let phoneError = document.getElementById("phone-error");
   
    if (phoneInput.value.trim().length === 0) {
        phoneError.innerHTML = "Phone number is required";
        return false;
    } else if (!phoneInput.checkValidity()) {
        phoneError.innerHTML = "Please enter a valid phone number (format: 123-456-7890)";
        return false;
    } else {
        phoneError.innerHTML = "";
        return true;
    }
}

// Format phone number as user types
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

// Email Validation
function validateEmail() {
    let emailInput = document.getElementById("email");
    let emailError = document.getElementById("email-error");
   
    if (emailInput.value.trim().length === 0) {
        emailError.innerHTML = "Email is required";
        return false;
    } else if (!emailInput.checkValidity()) {
        emailError.innerHTML = "Please enter a valid email address (format: name@domain.tld)";
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
   
    // Convert to lowercase
    userIdInput.value = userIdInput.value.toLowerCase();

    if (userIdInput.value.trim().length === 0) {
        userIdError.innerHTML = "User ID is required";
        return false;
    } else if (!isNaN(userIdInput.value.charAt(0))) {
        userIdError.innerHTML = "User ID cannot start with a number";
        return false;
    }

    let validChars = /^[a-zA-Z0-9_-]+$/;
    if (!validChars.test(userIdInput.value)) {
        userIdError.innerHTML = "User ID can only contain letters, numbers, underscores, and dashes";
        return false;
    } else if (userIdInput.value.length < 5) {
        userIdError.innerHTML = "User ID must be at least 5 characters";
        return false;
    } else if (userIdInput.value.length > 20) {
        userIdError.innerHTML = "User ID cannot exceed 20 characters";
        return false;
    } else {
        userIdError.innerHTML = "";
        return true;
    }
}

// Password Validation with real-time feedback
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
    if (passwordInput.length < 8) {
        messages.push("Password must be at least 8 characters");
    }
    
    // Check for required character types
    if (!passwordInput.match(/[a-z]/)) {
        messages.push("Enter at least one lowercase letter");
    }
    
    if (!passwordInput.match(/[A-Z]/)) {
        messages.push("Enter at least one uppercase letter");
    }
    
    if (!passwordInput.match(/[0-9]/)) {
        messages.push("Enter at least one number");
    }
    
    // Check for special characters
    if (!passwordInput.match(/[!@#$%^&*\(\)\-_+=\\\/><.,`~]/)) {
        messages.push("Enter at least one special character (!@#$%^&*()-_+=\\><.,`~)");
    }
    
    // Check if password contains user ID or name elements
    if (userId && (
        passwordInput.toLowerCase().includes(userId.toLowerCase()) || 
        (firstName && passwordInput.toLowerCase().includes(firstName.toLowerCase())) || 
        (lastName && passwordInput.toLowerCase().includes(lastName.toLowerCase()))
    )) {
        messages.push("Password cannot contain your user ID or name");
    }
   
    // Display up to 4 error messages
    messages.slice(0, 4).forEach((msg, idx) => {
        document.getElementById(`msg${idx+1}`).innerHTML = msg;
    });
   
    // Update password error summary
    if (messages.length > 0) {
        passwordError.innerHTML = "Password does not meet requirements";
        return false;
    } else {
        passwordError.innerHTML = "";
        return true;
    }
}

// Password Confirmation
function confirmPword() {
    let password = document.getElementById("pword").value;
    let confirmPassword = document.getElementById("pword2").value;
    let confirmError = document.getElementById("pword2-error");
   
    if (confirmPassword.length === 0) {
        confirmError.innerHTML = "Please confirm your password";
        return false;
    } else if (password !== confirmPassword) {
        confirmError.innerHTML = "Passwords do not match";
        return false;
    } else {
        confirmError.innerHTML = "";
        return true;
    }
}

// Validate slider
function validateSlider() {
    // The slider always has a value by design, so no validation is needed
    return true;
}

// Validate all fields before submission
function validateForm() {
    let isValid = true;
    
    // Call all validation functions
    isValid = validateFname() && isValid;
    isValid = validateMini() && isValid;
    isValid = validateLname() && isValid;
    isValid = validateDob() && isValid;
    isValid = validateSsn() && isValid;
    isValid = validateAddress1() && isValid;
    isValid = validateAddress2() && isValid;
    isValid = validateCity() && isValid;
    isValid = validateState() && isValid;
    isValid = validateZcode() && isValid;
    isValid = validatePhone() && isValid;
    isValid = validateEmail() && isValid;
    isValid = validateUid() && isValid;
    isValid = validatePword() && isValid;
    isValid = confirmPword() && isValid;
    
    // Check gender selection
    let genderSelected = false;
    let genderRadios = document.getElementsByName("gender");
    for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            genderSelected = true;
            break;
        }
    }
    
    if (!genderSelected) {
        alert("Please select a gender");
        isValid = false;
    }
    
    return isValid;
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
    
    // Add input event listeners for real-time formatting
    document.getElementById("ssn").addEventListener('input', function() {
        formatSsn(this);
    });
    
    document.getElementById("phone").addEventListener('input', function() {
        formatPhoneNumber(this);
    });
    
    document.getElementById("zcode").addEventListener('input', function() {
        formatZipCode(this);
    });
    
    // Add validation to form submission
    document.getElementById("signup").addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
            alert("Please correct all errors before submitting the form.");
        }
    });
    
    // Add error spans for fields that don't have them yet
    if (!document.getElementById("city-error")) {
        let cityField = document.getElementById("city");
        let errorSpan = document.createElement("span");
        errorSpan.id = "city-error";
        errorSpan.className = "error";
        cityField.parentNode.appendChild(errorSpan);
        cityField.addEventListener('blur', validateCity);
    }
    
    if (!document.getElementById("state-error")) {
        let stateField = document.getElementById("state");
        let errorSpan = document.createElement("span");
        errorSpan.id = "state-error";
        errorSpan.className = "error";
        stateField.parentNode.appendChild(errorSpan);
        stateField.addEventListener('blur', validateState);
    }
    
    // Add blur event listeners for fields that don't have onblur attributes
    document.getElementById("city").addEventListener('blur', validateCity);
    document.getElementById("state").addEventListener('blur', validateState);
});

// Form Review 
function reviewInput() {
    // First validate all fields
    if (!validateForm()) {
        alert("Please correct all errors before reviewing your information.");
        return;
    }
    
    let form = document.getElementById("signup");
    let formSummary = "<table class='output'><th colspan='2'>Review Your Information:</th>";
   
    // Loop through form elements
    Array.from(form.elements).forEach(element => {
        if (element.name && element.value !== "" && !["button", "submit", "reset"].includes(element.type)) {
            let label = element.name.charAt(0).toUpperCase() + element.name.slice(1).replace(/_/g, " ");
            
            switch (element.type) {
                case "checkbox":
                    if (element.checked) {
                        formSummary += `<tr><td align='right'>${label}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (element.checked) {
                        formSummary += `<tr><td align='right'>${label}</td><td>${element.value}</td></tr>`;
                    }
                    break;
                case "password":
                    formSummary += `<tr><td align='right'>${label}</td><td>********</td></tr>`;
                    break;
                case "range":
                    formSummary += `<tr><td align='right'>${label}</td><td>${element.value}/10</td></tr>`;
                    break;
                default:
                    formSummary += `<tr><td align='right'>${label}</td><td>${element.value}</td></tr>`;
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