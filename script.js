document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('nav') && !event.target.closest('.mobile-menu-btn')) {
            navMenu.classList.remove('active');
        }
    });

    
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            document.getElementById("main-content").innerHTML = `
                <div style="text-align: center; padding: 100px 20px;">
                    <h1>Thank You for Contacting Us!</h1>
                    <p>We’ll get back to you as soon as possible.</p>
                    <a href="index.html" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background: #333; color: white; text-decoration: none; border-radius: 5px;">Back to Home</a>
                </div>
            `;
        });
    }

    
    const testDriveForm = document.querySelector('.test-drive-form');
    const submitBtn = document.getElementById("submit-btn");

    if (testDriveForm) {
        
        function showError(inputId, message) {
            const errorElement = document.getElementById(`${inputId}-error`);
            errorElement.textContent = message;
            errorElement.style.display = 'block';
            document.getElementById(inputId).style.borderColor = 'red';
        }

        
        function hideError(inputId) {
            const errorElement = document.getElementById(`${inputId}-error`);
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            document.getElementById(inputId).style.borderColor = '';
        }


        testDriveForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default, we control manually

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const carModel = document.getElementById("car-model").value.trim();
            const testDriveDate = document.getElementById("test-drive-date").value.trim();

            const phonePattern = /^\d{11}$/; // exactly 11 digits
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple email pattern

            let isValid = true;


            if (name === "") {
                showError("name", "Please enter your name.");
                isValid = false;
            } else {
                hideError("name");
            }

            if (!emailPattern.test(email)) {
                showError("email", "Please enter a valid email address.");
                isValid = false;
            } else {
                hideError("email");
            }

            if (!phonePattern.test(phone)) {
                showError("phone", "Phone number must be exactly 11 digits.");
                isValid = false;
            } else {
                hideError("phone");
            }

            if (carModel === "") {
                showError("car-model", "Please select a car model.");
                isValid = false;
            } else {
                hideError("car-model");
            }

            if (testDriveDate === "") {
                showError("test-drive-date", "Please select a test drive date.");
                isValid = false;
            } else {
                hideError("test-drive-date");
            }

            if (isValid) {
                book(event); // if everything is valid, continue
            }
        });


        testDriveForm.addEventListener('input', function () {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const carModel = document.getElementById("car-model").value.trim();
            const testDriveDate = document.getElementById("test-drive-date").value.trim();

            submitBtn.disabled = !(name && email && phone && carModel && testDriveDate);
        });
    }


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
    var i = 0;
    var images = [];
    var time = 2000;

    images[0] = "./photos/Mercedes benz Cla 35 Amgg.png";
    images[1] = "./photos/Ford Focus.png";
    images[2] = "./photos/Skoda Kodiaq 2024.png";
    images[3] = "./photos/Hyundai Tucson 2024.png";
    images[4] = "./photos/Kia sportage V.png" ;
    images[5] = "./photos/WhatsApp Image 2025-04-14 at 00.28.51_7dbc65b6.jpg";
    images[6] = "./photos/WhatsApp Image 2025-04-14 at 00.28.51_5b7b8dab.jpg"
    function changeimg(){
        const imgelement = document.getElementById("slide");
        imgelement.src = images[i];
        i = (i + 1) % images.length;
        setTimeout(changeimg,time);
    }
    window.onload = changeimg;
});
