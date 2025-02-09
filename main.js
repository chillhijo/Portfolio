document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.getElementById("contact");
    contactSection.style.cursor = "pointer";
    
    contactSection.addEventListener("click", function () {
        alert("Contact Dusko Pralica via Email: pralicadusko93@gmail.com");
    });
});
