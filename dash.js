// Send OTP Interaction
document.getElementById('send-otp').addEventListener('click', function () {
    const mobile = document.getElementById('mobile').value;
    if (mobile) {
        alert(OTP sent to ${mobile});
    } else {
        alert('Please enter a valid mobile number.');
    }
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");

    steps.forEach((step, index) => {
        step.addEventListener("click", () => {
            // Remove active class from all steps
            steps.forEach(s => s.classList.remove("active"));
            // Add active class to the clicked step
            step.classList.add("active");
        });
    });
});