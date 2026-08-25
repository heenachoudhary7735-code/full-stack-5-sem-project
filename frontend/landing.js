 let cartCount = 0;

const cart = document.querySelector(".fa-cart-shopping");
const heart = document.querySelector(".fa-heart");

cart.addEventListener("click", function () {
    cartCount++;
    alert("Cart clicked! Items: " + cartCount);
});

heart.addEventListener("click", function () {
    alert("Added to wishlist ❤️");
});   

