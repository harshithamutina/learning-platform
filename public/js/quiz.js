// Quiz database
const quizDatabase = {
    c: [
        {
            questions: [
                {
                    question: "Which data type is used to store decimal numbers in C?",
                    options: ["int", "float", "char", "string"],
                    correct: 1
                },
                {
                    question: "What is the correct way to declare an integer variable named 'count' with value 10?",
                    options: ["int count = 10;", "count int = 10;", "integer count = 10;", "var count = 10;"],
                    correct: 0
                },
                {
                    question: "Which data type stores a single character?",
                    options: ["string", "text", "char", "character"],
                    correct: 2
                }
            ]
        },
        {
            questions: [
                {
                    question: "What does an if statement do?",
                    options: ["Executes code repeatedly", "Executes code based on a condition", "Declares a variable", "Ends the program"],
                    correct: 1
                },
                {
                    question: "What is printed: if (5 > 3) { printf('A'); } else { printf('B'); }",
                    options: ["A", "B", "AB", "Nothing"],
                    correct: 0
                },
                {
                    question: "Which keyword is used for an alternative condition?",
                    options: ["then", "else", "otherwise", "elif"],
                    correct: 1
                }
            ]
        },
        {
            questions: [
                {
                    question: "Which loop is best when you know the exact number of iterations?",
                    options: ["while loop", "for loop", "do-while loop", "if loop"],
                    correct: 1
                },
                {
                    question: "How many times does this loop run: for (int i = 0; i < 3; i++)?",
                    options: ["2 times", "3 times", "4 times", "Infinite"],
                    correct: 1
                },
                {
                    question: "What is the difference between while and do-while?",
                    options: ["No difference", "do-while executes at least once", "while is faster", "do-while is deprecated"],
                    correct: 1
                }
            ]
        }
    ],
    cpp: [
        {
            questions: [
                {
                    question: "What is a class in C++?",
                    options: ["A function", "A blueprint for objects", "A variable type", "A loop structure"],
                    correct: 1
                },
                {
                    question: "What keyword is used to create an object?",
                    options: ["new", "object", "create", "Just declare with class name"],
                    correct: 3
                },
                {
                    question: "Which access specifier makes members accessible from anywhere?",
                    options: ["private", "public", "protected", "global"],
                    correct: 1
                }
            ]
        },
        {
            questions: [
                {
                    question: "What is inheritance?",
                    options: ["Creating multiple objects", "One class acquiring properties of another", "Declaring variables", "A type of loop"],
                    correct: 1
                },
                {
                    question: "What is the parent class called?",
                    options: ["Derived class", "Base class", "Child class", "Sub class"],
                    correct: 1
                },
                {
                    question: "What symbol is used to inherit in C++?",
                    options: ["->", "::", ":", "=>"],
                    correct: 2
                }
            ]
        },
        {
            questions: [
                {
                    question: "What does a pointer store?",
                    options: ["A value", "A memory address", "A function", "A class"],
                    correct: 1
                },
                {
                    question: "Which operator gets the address of a variable?",
                    options: ["*", "&", "->", "::"],
                    correct: 1
                },
                {
                    question: "What does dereferencing a pointer mean?",
                    options: ["Deleting the pointer", "Getting the value at the address", "Creating a new pointer", "Changing the address"],
                    correct: 1
                }
            ]
        }
    ],
    java: [
        {
            questions: [
                {
                    question: "How many main pillars of OOP are there?",
                    options: ["2", "3", "4", "5"],
                    correct: 2
                },
                {
                    question: "Which principle hides internal details?",
                    options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
                    correct: 1
                },
                {
                    question: "What keyword is used for inheritance in Java?",
                    options: ["implements", "extends", "inherits", "derives"],
                    correct: 1
                }
            ]
        },
        {
            questions: [
                {
                    question: "What keyword indicates a method returns nothing?",
                    options: ["null", "void", "empty", "none"],
                    correct: 1
                },
                {
                    question: "What is method overloading?",
                    options: ["Calling too many methods", "Multiple methods with same name, different parameters", "Overriding parent methods", "Creating too many objects"],
                    correct: 1
                },
                {
                    question: "How do you call a static method?",
                    options: ["Create object first", "Use class name directly", "Use super keyword", "Cannot call static methods"],
                    correct: 1
                }
            ]
        },
        {
            questions: [
                {
                    question: "What is an exception?",
                    options: ["A syntax error", "A runtime error", "A compilation error", "A warning"],
                    correct: 1
                },
                {
                    question: "Which block is used to handle exceptions?",
                    options: ["catch", "handle", "except", "error"],
                    correct: 0
                },
                {
                    question: "Which block always executes?",
                    options: ["try", "catch", "finally", "throw"],
                    correct: 2
                }
            ]
        }
    ],
    python: [
        {
            questions: [
                {
                    question: "How do you add an item to a list?",
                    options: ["add()", "append()", "insert()", "push()"],
                    correct: 1
                },
                {
                    question: "What type of data structure uses key-value pairs?",
                    options: ["List", "Tuple", "Dictionary", "Set"],
                    correct: 2
                },
                {
                    question: "What is printed: d = {'a': 1}; print(d['a'])?",
                    options: ["a", "1", "{'a': 1}", "Error"],
                    correct: 1
                }
            ]
        },
        {
            questions: [
                {
                    question: "What keyword defines a function?",
                    options: ["function", "def", "func", "define"],
                    correct: 1
                },
                {
                    question: "How do you use code from another file?",
                    options: ["include", "require", "import", "use"],
                    correct: 2
                },
                {
                    question: "What is a module?",
                    options: ["A function", "A variable", "A file containing Python code", "A loop"],
                    correct: 2
                }
            ]
        },
        {
            questions: [
                {
                    question: "Which mode is used to write to a file?",
                    options: ["r", "w", "a", "x"],
                    correct: 1
                },
                {
                    question: "What does the with statement do?",
                    options: ["Opens file faster", "Automatically closes the file", "Encrypts the file", "Compresses the file"],
                    correct: 1
                },
                {
                    question: "Which method reads entire file content?",
                    options: ["read()", "readline()", "readlines()", "get()"],
                    correct: 0
                }
            ]
        }
    ]
};

// Load quiz on page load
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const course = params.get('course') || 'c';
    const lesson = parseInt(params.get('lesson')) || 0;

    window.currentCourse = course;
    window.currentLesson = lesson;
    window.currentQuestion = 0;
    window.userAnswers = [];
    window.score = 0;

    const courseQuiz = quizDatabase[course];
    if (courseQuiz && courseQuiz[lesson]) {
        window.currentQuiz = courseQuiz[lesson].questions;
        displayQuestion();
    }
});

function displayQuestion() {
    if (!window.currentQuiz || window.currentQuestion >= window.currentQuiz.length) {
        displayResults();
        return;
    }

    const question = window.currentQuiz[window.currentQuestion];
    const container = document.getElementById('quizContainer');

    let html = `
        <div class="quiz-question">
            <div class="question-header">
                <span class="question-number">Question ${window.currentQuestion + 1} of ${window.currentQuiz.length}</span>
            </div>
            <h3 class="question-text">${question.question}</h3>
            <div class="options">
    `;

    question.options.forEach((option, index) => {
        html += `
            <div class="option">
                <label>
                    <input type="radio" name="answer" value="${index}">
                    ${option}
                </label>
            </div>
        `;
    });

    html += `
            </div>
            <div class="quiz-buttons">
    `;

    if (window.currentQuestion > 0) {
        html += `<button class="btn btn-secondary" onclick="previousQuestion()">← Previous</button>`;
    }

    if (window.currentQuestion < window.currentQuiz.length - 1) {
        html += `<button class="btn btn-primary" onclick="nextQuestion()">Next →</button>`;
    } else {
        html += `<button class="btn btn-primary" onclick="submitQuiz()">Submit Quiz</button>`;
    }

    html += `
            </div>
        </div>
    `;

    container.innerHTML = html;

    // Restore previous answer if exists
    if (window.userAnswers[window.currentQuestion] !== undefined) {
        const previousAnswer = window.userAnswers[window.currentQuestion];
        document.querySelector(`input[value="${previousAnswer}"]`).checked = true;
    }
}

function nextQuestion() {
    saveCurrentAnswer();
    if (window.currentQuestion < window.currentQuiz.length - 1) {
        window.currentQuestion++;
        displayQuestion();
    }
}

function previousQuestion() {
    saveCurrentAnswer();
    if (window.currentQuestion > 0) {
        window.currentQuestion--;
        displayQuestion();
    }
}

function saveCurrentAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected) {
        window.userAnswers[window.currentQuestion] = parseInt(selected.value);
    }
}

function submitQuiz() {
    saveCurrentAnswer();

    // Check if all questions answered
    for (let i = 0; i < window.currentQuiz.length; i++) {
        if (window.userAnswers[i] === undefined) {
            alert('Please answer all questions!');
            return;
        }
    }

    // Calculate score
    window.score = 0;
    window.currentQuiz.forEach((question, index) => {
        if (window.userAnswers[index] === question.correct) {
            window.score++;
        }
    });

    displayResults();
}

function displayResults() {
    const container = document.getElementById('quizContainer');
    const percentage = ((window.score / window.currentQuiz.length) * 100).toFixed(1);

    let html = `
        <div class="quiz-results">
            <h2>Quiz Results</h2>
            <div class="score-display">
                <div class="score-circle">
                    <span class="score">${window.score}</span>
                    <span class="total">/${window.currentQuiz.length}</span>
                </div>
                <p class="percentage">${percentage}%</p>
            </div>
            <div class="results-details">
                <h3>Your Answers:</h3>
    `;

    window.currentQuiz.forEach((question, index) => {
        const isCorrect = window.userAnswers[index] === question.correct;
        const statusIcon = isCorrect ? '✓' : '✗';

        html += `
            <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="result-header">
                    <span class="status-icon">${statusIcon}</span>
                    <strong>Question ${index + 1}:</strong> ${question.question}
                </div>
                <div class="result-answer">
                    Your answer: ${question.options[window.userAnswers[index]]}
                </div>
                ${!isCorrect ? `
                    <div class="correct-answer">
                        Correct answer: ${question.options[question.correct]}
                    </div>
                ` : ''}
            </div>
        `;
    });

    html += `
            </div>
            <div class="results-buttons" style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                <button class="btn btn-primary" onclick="retryQuiz()">Retry Quiz</button>
                <a href="courses.html" class="btn btn-secondary" style="text-decoration: none;">Back to Courses</a>
            </div>
        </div>
    `;

    container.innerHTML = html;

    // Save score to backend
    saveQuizScore();
}

function retryQuiz() {
    window.currentQuestion = 0;
    window.userAnswers = [];
    window.score = 0;
    displayQuestion();
}

function saveQuizScore() {
    const token = localStorage.getItem('token');
    if (!token) return;

    const data = {
        courseId: window.currentCourse,
        lessonIndex: window.currentLesson,
        score: window.score,
        totalQuestions: window.currentQuiz.length
    };

    fetch('/api/progress/quiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }).catch(err => console.error('Error saving quiz score:', err));
}
