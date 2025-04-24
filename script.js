document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');

    mobileMenuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('nav') && !event.target.closest('.mobile-menu-btn')) {
            navMenu.classList.remove('active');
        }
    });

    const form = document.querySelector('.test-drive-form');
    const submitBtn = document.getElementById("submit-btn");

    // Function to check if all fields are filled
    function checkFormValidity() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const carModel = document.getElementById("car-model").value.trim();
        const testDriveDate = document.getElementById("test-drive-date").value.trim();

        if (name && email && phone && carModel && testDriveDate) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

    // Listen for changes on the form fields
    form.addEventListener('input', checkFormValidity);

    // Handle form submission
    form.addEventListener('submit', function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const carModel = document.getElementById("car-model").value.trim();
        const testDriveDate = document.getElementById("test-drive-date").value.trim();

        if (!(name && email && phone && carModel && testDriveDate)) {
            event.preventDefault();
        } else {
            book(event);
        }
    });
});

function book(event) {
    event.preventDefault();
    document.getElementById("main-content").innerHTML = `
        <div style="text-align: center; padding: 100px 20px;">
            <h1>Thank You for Booking!</h1>
            <p>We’ll contact you soon to confirm your test drive.</p>
            <a href="index.html" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background: #333; color: white; text-decoration: none; border-radius: 5px;">Back to Home</a>
        </div>
    `;
}
