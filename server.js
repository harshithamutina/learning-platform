// Import required packages
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key-12345';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage (replace with database for production)
let users = [];
let userProgress = {};

// ===================== AUTH ROUTES =====================

// Signup Route
app.post('/api/auth/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Check if email already exists
        const emailExists = users.find(u => u.email === email);
        if (emailExists) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = {
            id: users.length + 1,
            name: name,
            email: email,
            password: hashedPassword,
            createdAt: new Date()
        };

        users.push(newUser);

        // Initialize user progress
        userProgress[newUser.id] = {
            c: { lessonsCompleted: [], quizScores: {} },
            cpp: { lessonsCompleted: [], quizScores: {} },
            java: { lessonsCompleted: [], quizScores: {} },
            python: { lessonsCompleted: [], quizScores: {} }
        };

        res.status(201).json({ 
            message: 'User created successfully',
            userId: newUser.id 
        });

    } catch (error) {
        res.status(500).json({ error: 'Server error during signup' });
    }
});

// Login Route
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password required' });
        }

        // Find user
        const user = users.find(u => u.email === email);
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Create JWT token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            SECRET_KEY,
            { expiresIn: '7d' }
        );

        res.json({
            token: token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({ error: 'Server error during login' });
    }
});

// ===================== AUTH MIDDLEWARE =====================

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
};

// ===================== PROGRESS ROUTES (Protected) =====================

// Get user progress
app.get('/api/progress', authenticateToken, (req, res) => {
    try {
        const progress = userProgress[req.user.userId] || {
            c: { lessonsCompleted: [], quizScores: {} },
            cpp: { lessonsCompleted: [], quizScores: {} },
            java: { lessonsCompleted: [], quizScores: {} },
            python: { lessonsCompleted: [], quizScores: {} }
        };
        res.json(progress);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching progress' });
    }
});

// Update lesson completion
app.post('/api/progress/lesson', authenticateToken, (req, res) => {
    try {
        const { courseId, lessonIndex } = req.body;
        const userId = req.user.userId;

        if (!userProgress[userId]) {
            userProgress[userId] = {
                c: { lessonsCompleted: [], quizScores: {} },
                cpp: { lessonsCompleted: [], quizScores: {} },
                java: { lessonsCompleted: [], quizScores: {} },
                python: { lessonsCompleted: [], quizScores: {} }
            };
        }

        if (!userProgress[userId][courseId]) {
            userProgress[userId][courseId] = { lessonsCompleted: [], quizScores: {} };
        }

        const lessons = userProgress[userId][courseId].lessonsCompleted;
        if (!lessons.includes(lessonIndex)) {
            lessons.push(lessonIndex);
        }

        res.json({ message: 'Lesson progress saved' });

    } catch (error) {
        res.status(500).json({ error: 'Error saving lesson progress' });
    }
});

// Save quiz score
app.post('/api/progress/quiz', authenticateToken, (req, res) => {
    try {
        const { courseId, lessonIndex, score, totalQuestions } = req.body;
        const userId = req.user.userId;

        if (!userProgress[userId]) {
            userProgress[userId] = {
                c: { lessonsCompleted: [], quizScores: {} },
                cpp: { lessonsCompleted: [], quizScores: {} },
                java: { lessonsCompleted: [], quizScores: {} },
                python: { lessonsCompleted: [], quizScores: {} }
            };
        }

        if (!userProgress[userId][courseId]) {
            userProgress[userId][courseId] = { lessonsCompleted: [], quizScores: {} };
        }

        userProgress[userId][courseId].quizScores[lessonIndex] = {
            score: score,
            totalQuestions: totalQuestions,
            percentage: ((score / totalQuestions) * 100).toFixed(1),
            completedAt: new Date()
        };

        res.json({ message: 'Quiz score saved' });

    } catch (error) {
        res.status(500).json({ error: 'Error saving quiz score' });
    }
});

// ===================== PUBLIC ROUTES =====================

// Get all courses (public)
app.get('/api/courses', (req, res) => {
    const courses = [
        { id: 'c', name: 'C Programming', icon: '📘', lessonsCount: 3 },
        { id: 'cpp', name: 'C++ Programming', icon: '📗', lessonsCount: 3 },
        { id: 'java', name: 'Java Programming', icon: '📙', lessonsCount: 3 },
        { id: 'python', name: 'Python Programming', icon: '📕', lessonsCount: 3 }
    ];
    res.json(courses);
});

// Serve index.html for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle 404 for SPA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
