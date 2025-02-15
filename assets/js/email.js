document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("tU7aBOzCfej_K122M"); // Cseréld ki a saját PUBLIC KEY-edre!

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Megakadályozza az oldal újratöltését

        // Adatok begyűjtése az űrlapból
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // EmailJS hívás
        emailjs.send("service_ygk81bp", "template_1p0jw6i", formData)
            .then(function (response) {
                alert("Sikeresen elküldve!");
                document.getElementById("contact-form").reset(); // Űrlap törlése
            }, function (error) {
                alert("Hiba történt: " + error.text);
            });
    });
});
