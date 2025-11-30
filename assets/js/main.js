// Basic client-side interactivity: form validation and simple handlers
document.addEventListener('DOMContentLoaded', function() {
    // Generic form validation handler
    function attachFormValidation(selector) {
        const form = document.querySelector(selector);
        if (!form) return;
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                return;
            }
            // Simulate successful submission
            const submitButtons = form.querySelectorAll('button[type="submit"], input[type="submit"]');
            submitButtons.forEach(b => b.disabled = true);
            setTimeout(() => {
                alert('Thank you! Your request has been received. We will contact you shortly.');
                form.reset();
                form.classList.remove('was-validated');
                submitButtons.forEach(b => b.disabled = false);
                // close any modals if open
                const mod = bootstrap.Modal.getInstance(document.querySelector('#bookingModal'));
                if (mod) mod.hide();
            }, 800);
        });
    }

    attachFormValidation('#bookingForm');
    attachFormValidation('#bookingFormPackages');
    attachFormValidation('#bookingFormContact');
    attachFormValidation('#contactForm');
    attachFormValidation('#newsletterForm');

    // small enhancement: smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            const id = this.getAttribute('href').slice(1);
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        });
    });
});