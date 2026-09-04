// Get password input

const password = document.getElementById("password");

const showPassword = document.getElementById("showPassword");




showPassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }

});




const loginForm = document.getElementById("loginForm");


loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    const passwordValue = document.getElementById("password").value;


    if (email === "" || passwordValue === "") {

        alert("Please fill all fields.");

    } else {

        alert("Login button clicked!");

    }

});