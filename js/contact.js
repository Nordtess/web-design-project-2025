/* function validateForm() {
    let name = document.forms["contact-text"] ["flname"].value;
    let message = document.forms["contact-text"] ["message-area"].value;
    if (name == "" && message == "") {
        alert("Please enter your full name and a message before submitting!");
        return false;
    
    } else if (name == "") {
        alert("Please enter your first and last name!");
        return false;

    } else if (message == "") {
        alert("Please enter your message before submitting!");
        return false;

    } else {
        return true;
    }

    
} */



// simple regex.
const pattern = /^[a-zA-Z]+$/;
let result = pattern.test(name)

/* Using eventListener to listen on the submit button and to validate if the user has put in the required information we want into the name and text fields. Use DOMContentLoaded to let the DOM be loaded in first to not trigger errors just in case and then calling the function. Using a const (for constant, so it can't be changed) on the form variable (and the rest) which we declare as the contact-text form element in the document (document is the whole webpage, we refer to all <form> elements on it). We listen on the submit button and if the information we want isn't there we prevent the code from submitting the information and stopping it before. The user then recieves a message/alert on what information they need to put in. A simple regex to check for invalid characters in the name field */


document.addEventListener("DOMContentLoaded", function () {
    const form = document.forms["contact-text"];
    form.addEventListener("submit", function (e) {
        const name = form["flname"].value;
        const message = form["message-area"].value;
        if (name == "" && message == "") {
            alert("Please enter your full name and your message!");
            e.preventDefault();

        } else if (name == "") {
            alert("Please enter your first and last name!");
            e.preventDefault();

        } else if (!pattern.test(name)) {
            alert("Only enter characters from the latin alphabet as your name please!");
            e.preventDefault();

        } else if (message == "") {
            alert("Please enter your message before submitting!");
            e.preventDefault();
        }

    })
})