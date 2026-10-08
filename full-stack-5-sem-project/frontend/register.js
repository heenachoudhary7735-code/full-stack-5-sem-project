const registerForm = document.getElementById("registerForm");


registerForm.addEventListener("submit", function(event) {

    event.preventDefault();


    

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const terms =
        document.getElementById("terms").checked;



    

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }



    

    if (!terms) {

        alert("Please agree to the Terms & Conditions.");

        return;
    }



    

    alert("Account created successfully!");

});