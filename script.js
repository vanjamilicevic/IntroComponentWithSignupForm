let button = document.getElementById("button")

let firstNameInput = document.getElementById("input-name")
let firstNameContainer = document.getElementById("name-container")
let firstNameErrorSign = document.getElementById("error-sign-name")
let firstNameErrorText = document.getElementById("error-text-name")

let lastNameInput = document.getElementById("input-last-name")
let lasttNameContainer = document.getElementById("last-name-container")
let lastNameErrorSign = document.getElementById("error-sign-last-name")
let lastNameErrorText = document.getElementById("error-text-last-name")

let emailInput = document.getElementById("input-email")
let emailContainer = document.getElementById("email-container")
let emailErrorSign = document.getElementById("error-sign-email")
let emailErrorText = document.getElementById("error-text-email")

let passwordInput = document.getElementById("input-password")
let passwordContainer = document.getElementById("password-container")
let passwordErrorSign = document.getElementById("error-sign-password")
let passwordErrorText = document.getElementById("error-text-password")

function validateEmail(email) {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

button.addEventListener("click", () => {
    if (!firstNameInput.value) {
        firstNameContainer.classList.add("error-class")
        firstNameErrorSign.classList.remove("not-visible")
        firstNameErrorText.classList.remove("not-visible")
    } else {
        firstNameContainer.classList.remove("error-class")
        firstNameErrorSign.classList.add("not-visible")
        firstNameErrorText.classList.add("not-visible")
    }

    if(!lastNameInput.value) {
        lasttNameContainer.classList.add("error-class")
        lastNameErrorSign.classList.remove("not-visible")
        lastNameErrorText.classList.remove("not-visible")
    } else {
        lasttNameContainer.classList.remove("error-class")
        lastNameErrorSign.classList.add("not-visible")
        lastNameErrorText.classList.add("not-visible")
    }

    if(!validateEmail(emailInput.value)){
        emailContainer.classList.add("error-class")
        emailErrorSign.classList.remove("not-visible")
        emailErrorText.classList.remove("not-visible")
    } else {
        emailContainer.classList.remove("error-class")
        emailErrorSign.classList.add("not-visible")
        emailErrorText.classList.add("not-visible")
    }

    if(!passwordInput.value) {
        passwordContainer.classList.add("error-class")
        passwordErrorSign.classList.remove("not-visible")
        passwordErrorText.classList.remove("not-visible")
    } else {
        passwordContainer.classList.remove("error-class")
        passwordErrorSign.classList.add("not-visible")
        passwordErrorText.classList.add("not-visible")
    }

})