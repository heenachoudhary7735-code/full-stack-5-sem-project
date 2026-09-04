let quantity = 1;

const quantityText = document.getElementById("quantity");

const minusButton = document.getElementById("minus");

const plusButton = document.getElementById("plus");




plusButton.addEventListener("click", function () {

    quantity++;

    quantityText.textContent = quantity;

    calculateTotal();

});




minusButton.addEventListener("click", function () {

    if (quantity > 1) {

        quantity--;

        quantityText.textContent = quantity;

        calculateTotal();

    }

});


// TOTAL

function calculateTotal() {

    let basePrice = 95;

    let sizePrice =
        Number(document.getElementById("size").value);

    let deliveryPrice = 0;

    const deliveryOptions =
        document.querySelectorAll(
            'input[name="delivery"]'
        );

    deliveryOptions.forEach(function (option) {

        if (option.checked) {

            deliveryPrice =
                Number(option.value);

        }

    });


    let total =
        (basePrice + sizePrice + deliveryPrice)
        * quantity;


    document.getElementById("total").textContent =
        "₹" + total.toFixed(2);

}




document.getElementById("size")
    .addEventListener("change", calculateTotal);




document.querySelectorAll(
    'input[name="delivery"]'
).forEach(function (option) {

    option.addEventListener(
        "change",
        calculateTotal
    );

});




const toppers =
    document.querySelectorAll(".topper");


toppers.forEach(function (topper) {

    topper.addEventListener("click", function () {

        toppers.forEach(function (item) {

            item.classList.remove("active");

        });

        topper.classList.add("active");

    });

});




document.getElementById("messageCheck")
    .addEventListener("change", function () {

        const message =
            document.getElementById("message");

        message.disabled = !this.checked;

    });




document.getElementById("addButton")
    .addEventListener("click", function () {

        const message =
            document.getElementById("message").value;

        alert(
            "Birthday Cake added to cart!\n\n" +
            "Quantity: " + quantity +
            "\nMessage: " + message
        );

    });