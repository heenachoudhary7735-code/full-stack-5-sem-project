const registerForm = document.getElementById("registerForm");


registerForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get values

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const terms =
        document.getElementById("terms").checked;



    // Check password

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }



    // Check terms

    if (!terms) {

        alert("Please agree to the Terms & Conditions.");

        return;
    }



    // Registration successful

    alert("Account created successfully!");

});