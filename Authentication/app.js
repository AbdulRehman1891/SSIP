function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    
    // Simple validation
    if(username && password) {
        localStorage.setItem(username, password);
        alert('Registration Successful!');
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields');
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const storedPassword = localStorage.getItem(username);
    
    if(password === storedPassword) {
        sessionStorage.setItem('user', username);
        window.location.href = 'secure.html';
    } else {
        alert('Incorrect username or password');
    }
}

function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

// Redirect to login if not logged in
if (window.location.pathname.includes('secure.html') && !sessionStorage.getItem('user')) {
    window.location.href = 'index.html';
} else if(window.location.pathname.includes('secure.html')) {
    document.getElementById('username').textContent = sessionStorage.getItem('user');
}
