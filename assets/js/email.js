// EmailJS inicializálása
(function() {
    emailjs.init("QMvhW_5O6vkq_GXpK-zEf"); // Helyettesítsd a saját EmailJS User ID-ddel
})();

// Űrlap beküldésének kezelése
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Adatok összegyűjtése
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Email küldése
    emailjs.send("service_ygk81bp", "template_1p0jw6i", formData) // Helyettesítsd a saját Service ID és Template ID-ddel
        .then(function(response) {
            document.getElementById('confirmationMessage').textContent = "Üzenet elküldve! Köszönjük a kapcsolatfelvételt.";
            document.getElementById('contactForm').reset();
        }, function(error) {
            document.getElementById('confirmationMessage').textContent = "Hiba történt az üzenet küldése közben. Kérjük, próbáld újra.";
        });
});