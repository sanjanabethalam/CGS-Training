document.getElementById("registerForm").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

        alert("Passwords do not match!");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 


        const inputs = form.querySelectorAll('input');
        let allFilled = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
            }
        });

        if (allFilled) {
            
            message.textContent = 'Registration successful!';
            message.style.color = '#27ae60'; 
        } else {
            
            message.textContent = 'Please fill out all fields.';
            message.style.color = '#e74c3c';
        }
       
    });
});