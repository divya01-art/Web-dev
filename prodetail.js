document.querySelector(".add-to-cart").addEventListener("click", function () {
    document.getElementById("cartNotification").classList.add("show");
    document.getElementById("overlay").classList.add("show");
});

function closeNotification() {
    document.getElementById("cartNotification").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
}