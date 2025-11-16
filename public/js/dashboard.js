// Load dashboard page data and user progress
document.addEventListener('DOMContentLoaded', async function() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    const token = localStorage.getItem('token');

    if (!token || !user) {
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('welcomeMsg').textContent = `Welcome, ${user.name}!`;

    try {
        const response = await fetch('http://localhost:5000/api/progress', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        });

        const progress = await response.json();

        const progressContainer = document.getElementById('progressContainer');
        progressContainer.innerHTML = '';

        const courses = [
            { id: 'c', name: 'C Programming', icon: '📘' },
            { id: 'cpp', name: 'C++ Programming', icon: '📗' },
            { id: 'java', name: 'Java Programming', icon: '📙' },
            { id: 'python', name: 'Python Programming', icon: '📕' }
        ];

        courses.forEach(course => {
            const courseProgress = progress[course.id] || { lessonsCompleted: [] };
            const completed = courseProgress.lessonsCompleted.length;
            const totalLessons = 3;
            const percentage = ((completed / totalLessons) * 100).toFixed(0);

            const html = `
                <div class="progress-card">
                    <h3>${course.icon} ${course.name}</h3>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${percentage}%"></div>
                    </div>
                    <p class="progress-text">${completed} of ${totalLessons} lessons completed (${percentage}%)</p>
                </div>
            `;
            progressContainer.innerHTML += html;
        });
    } catch (error) {
        console.error('Error loading progress:', error);
    }
});

// Log out user
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}
