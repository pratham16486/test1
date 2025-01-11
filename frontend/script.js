function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    let errorMessage = '';

    // Username validation
    if (username === '') {
        errorMessage += 'Username is required.\n';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage += 'Invalid email format.\n';
    }

    // Password validation
    if (password.length < 6) {
        errorMessage += 'Password must be at least 6 characters long.\n';
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        errorMessage += 'Passwords do not match.\n';
    }

    // Display error message or submit form
    alert(" Registration succesfull");
    const errorDisplay = document.getElementById('error-message');

    if (errorMessage) {
        errorDisplay.textContent = errorMessage.replace(/\n/g, ' ');
        return false;
    } else {
        errorDisplay.textContent = '';
        return true;
    }
}
    
