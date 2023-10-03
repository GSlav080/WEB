// script.js

document.addEventListener("DOMContentLoaded", function() {
    const servicesList = document.getElementById("services-list");
    const servicesSublist = document.querySelector(".level-5");

    servicesList.addEventListener("mouseenter", () => {
        servicesSublist.classList.remove("hidden");
    });

    servicesList.addEventListener("mouseleave", () => {
        servicesSublist.classList.add("hidden");
    });
});
