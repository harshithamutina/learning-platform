// Update navigation based on login state
document.addEventListener('DOMContentLoaded', function() {
    const navAuth = document.getElementById('navAuth');
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    if (token && user) {
        navAuth.innerHTML = `<a href="dashboard.html">Dashboard</a> | <a href="#" onclick="logout(); return false;">Logout</a>`;
    }
});

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}
