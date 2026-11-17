document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const alertBox = document.getElementById('loginAlert');

    // Hardcoded demo credentials check (Aligned to UiTM student email format)
    if (email === '2024123456@student.uitm.edu.my' && password === '123456') {
        // Store demo session data in localStorage
        localStorage.setItem('repageUserEmail', email);
        localStorage.setItem('repageUserName', 'Sarah');
        localStorage.setItem('repageUserId', '2024123456');

        alertBox.className = 'alert alert-success py-2 small mb-4';
        alertBox.innerHTML = '<i class="fa-solid fa-circle-check me-1"></i> Login successful! Redirecting to dashboard...';
        alertBox.classList.remove('d-none');

        // Simulate short delay then redirect to dashboard
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    } 
    // Check if user registered a new account during this browser session
    else {
        const storedName = localStorage.getItem('reg_' + email);
        if (storedName && password.length >= 6) {
            localStorage.setItem('repageUserEmail', email);
            localStorage.setItem('repageUserName', storedName);

            alertBox.className = 'alert alert-success py-2 small mb-4';
            alertBox.innerHTML = '<i class="fa-solid fa-circle-check me-1"></i> Login successful! Redirecting to dashboard...';
            alertBox.classList.remove('d-none');

            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000);
        } else {
            alertBox.className = 'alert alert-danger py-2 small mb-4';
            alertBox.innerHTML = '<i class="fa-solid fa-triangle-exclamation me-1"></i> Invalid email or password. Please use the demo credentials provided below.';
            alertBox.classList.remove('d-none');
        }
    }
});

const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('regName').value.trim();
        const regEmail = document.getElementById('regEmail').value.trim();
        const registerAlert = document.getElementById('registerAlert');

        // Save the registered name tied to their email in localStorage
        localStorage.setItem('reg_' + regEmail, name);

        registerAlert.className = 'alert alert-success small py-2';
        registerAlert.innerHTML = '<i class="fa-solid fa-circle-check me-1"></i> Account created! You can now sign in.';
        registerAlert.classList.remove('d-none');

        // Pre-fill login email for convenience
        document.getElementById('email').value = regEmail;

        setTimeout(() => {
            const modalEl = document.getElementById('registerModal');
            const modalInstance = bootstrap.Modal.getInstance(modalEl);
            modalInstance.hide();
            registerAlert.classList.add('d-none');
            registerForm.reset();
        }, 1500);
    });
}