// Lesson content database
const lessonDatabase = {
    c: [
        {
            title: 'Variables and Data Types',
            content: `
                <h2>Variables and Data Types in C</h2>
                <p>In C programming, variables are containers for storing data values. Before using a variable, you must declare it with a data type.</p>
                <h3>Common Data Types:</h3>
                <ul>
                    <li><strong>int</strong>: Integer numbers (e.g., 5, -10, 1000)</li>
                    <li><strong>float</strong>: Decimal numbers (e.g., 3.14, -0.5)</li>
                    <li><strong>char</strong>: Single characters (e.g., 'A', 'z', '5')</li>
                    <li><strong>double</strong>: Double-precision decimal numbers</li>
                </ul>
                <h3>Variable Declaration:</h3>
                <pre><code>int age = 25;
float price = 99.99;
char grade = 'A';
double pi = 3.14159;</code></pre>
                <p>Variables must be declared before use and follow naming rules (start with letter/underscore, no spaces, no keywords).</p>
            `
        },
        {
            title: 'Control Flow (if/else)',
            content: `
                <h2>Control Flow in C</h2>
                <p>Control flow statements allow your program to make decisions based on conditions.</p>
                <h3>If Statement:</h3>
                <p>Executes code only if a condition is true.</p>
                <pre><code>if (age >= 18) {
    printf("You are an adult");
}</code></pre>
                <h3>If-Else Statement:</h3>
                <p>Executes one block if condition is true, another if false.</p>
                <pre><code>if (score >= 60) {
    printf("Pass");
} else {
    printf("Fail");
}</code></pre>
                <h3>Else-If Ladder:</h3>
                <p>Tests multiple conditions in sequence.</p>
                <pre><code>if (score >= 90) {
    printf("A grade");
} else if (score >= 80) {
    printf("B grade");
} else {
    printf("C grade");
}</code></pre>
            `
        },
        {
            title: 'Loops (for/while)',
            content: `
                <h2>Loops in C</h2>
                <p>Loops allow you to execute code repeatedly.</p>
                <h3>For Loop:</h3>
                <p>Used when you know how many times to repeat.</p>
                <pre><code>for (int i = 0; i < 5; i++) {
    printf("%d ", i);  // Prints: 0 1 2 3 4
}</code></pre>
                <h3>While Loop:</h3>
                <p>Repeats while a condition is true.</p>
                <pre><code>int count = 0;
while (count < 3) {
    printf("%d ", count);
    count++;
}</code></pre>
                <h3>Do-While Loop:</h3>
                <p>Executes at least once, then checks condition.</p>
                <pre><code>int x = 0;
do {
    printf("%d ", x);
    x++;
} while (x < 3);</code></pre>
            `
        }
    ],
    cpp: [
        {
            title: 'Classes and Objects',
            content: `
                <h2>Classes and Objects in C++</h2>
                <p>C++ is an object-oriented language. Classes and objects are fundamental concepts.</p>
                <h3>Class:</h3>
                <p>A blueprint for creating objects. Defines properties (data members) and behaviors (member functions).</p>
                <pre><code>class Car {
    public:
        string brand;
        int year;
        void display() {
            cout << brand << " " << year;
        }
};</code></pre>
                <h3>Object:</h3>
                <p>An instance of a class.</p>
                <pre><code>Car myCar;
myCar.brand = "Toyota";
myCar.year = 2020;
myCar.display();</code></pre>
                <h3>Access Specifiers:</h3>
                <ul>
                    <li><strong>public</strong>: Accessible from anywhere</li>
                    <li><strong>private</strong>: Accessible only within class</li>
                    <li><strong>protected</strong>: Accessible in class and derived classes</li>
                </ul>
            `
        },
        {
            title: 'Inheritance',
            content: `
                <h2>Inheritance in C++</h2>
                <p>Inheritance allows a class to inherit properties and methods from another class.</p>
                <h3>Base Class (Parent):</h3>
                <p>The class being inherited from.</p>
                <h3>Derived Class (Child):</h3>
                <p>The class that inherits.</p>
                <pre><code>class Animal {
    public:
        void eat() {
            cout << "Eating...";
        }
};

class Dog : public Animal {
    public:
        void bark() {
            cout << "Barking...";
        }
};

Dog myDog;
myDog.eat();   // Inherited
myDog.bark();  // Own method</code></pre>
                <h3>Benefits:</h3>
                <ul>
                    <li>Code reusability</li>
                    <li>Establishes relationships between classes</li>
                    <li>Supports polymorphism</li>
                </ul>
            `
        },
        {
            title: 'Pointers Basics',
            content: `
                <h2>Pointers in C++</h2>
                <p>A pointer is a variable that stores the memory address of another variable.</p>
                <h3>Declaration:</h3>
                <pre><code>int* ptr;  // Pointer to an integer</code></pre>
                <h3>Getting Address:</h3>
                <p>Use & operator to get address of a variable.</p>
                <pre><code>int num = 10;
int* ptr = &num;  // ptr now holds address of num</code></pre>
                <h3>Dereferencing:</h3>
                <p>Use * operator to access value at the address.</p>
                <pre><code>cout << *ptr;  // Prints 10</code></pre>
                <h3>Why Use Pointers:</h3>
                <ul>
                    <li>Dynamic memory allocation</li>
                    <li>Efficient array handling</li>
                    <li>Pass by reference</li>
                    <li>Data structures (linked lists, trees)</li>
                </ul>
            `
        }
    ],
    java: [
        {
            title: 'OOP Concepts',
            content: `
                <h2>Object-Oriented Programming in Java</h2>
                <p>Java is a pure OOP language built on four main principles.</p>
                <h3>The Four Pillars:</h3>
                <h4>1. Encapsulation:</h4>
                <p>Bundling data and methods together, hiding internal details.</p>
                <pre><code>class Account {
    private double balance;
    public double getBalance() { return balance; }
    public void setBalance(double b) { balance = b; }
}</code></pre>
                <h4>2. Inheritance:</h4>
                <p>Creating new classes from existing ones.</p>
                <pre><code>class Vehicle { }
class Car extends Vehicle { }</code></pre>
                <h4>3. Polymorphism:</h4>
                <p>One interface, multiple implementations.</p>
                <h4>4. Abstraction:</h4>
                <p>Showing only essential features, hiding complexity.</p>
                <p>Everything in Java is associated with classes and objects!</p>
            `
        },
        {
            title: 'Methods and Functions',
            content: `
                <h2>Methods in Java</h2>
                <p>A method is a block of code that performs a specific task.</p>
                <h3>Method Declaration:</h3>
                <pre><code>returnType methodName(parameters) {
    // method body
    return value;
}</code></pre>
                <h3>Example:</h3>
                <pre><code>public int add(int a, int b) {
    return a + b;
}</code></pre>
                <h3>Types:</h3>
                <ul>
                    <li><strong>void methods</strong>: Don't return a value</li>
                    <li><strong>return methods</strong>: Return a value</li>
                    <li><strong>static methods</strong>: Called without creating object</li>
                    <li><strong>instance methods</strong>: Require object to call</li>
                </ul>
                <h3>Method Overloading:</h3>
                <p>Multiple methods with same name but different parameters.</p>
                <pre><code>int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }</code></pre>
            `
        },
        {
            title: 'Exception Handling',
            content: `
                <h2>Exception Handling in Java</h2>
                <p>Exceptions are runtime errors that disrupt program flow. Java provides mechanisms to handle them gracefully.</p>
                <h3>Try-Catch Block:</h3>
                <pre><code>try {
    int result = 10 / 0;  // May cause exception
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
}</code></pre>
                <h3>Finally Block:</h3>
                <p>Always executes, regardless of exception.</p>
                <pre><code>try {
    // code
} catch (Exception e) {
    // handle
} finally {
    // cleanup code
}</code></pre>
                <h3>Throw Keyword:</h3>
                <p>Manually throw an exception.</p>
                <pre><code>if (age < 0) {
    throw new IllegalArgumentException("Invalid age");
}</code></pre>
                <h3>Common Exceptions:</h3>
                <ul>
                    <li>NullPointerException</li>
                    <li>ArrayIndexOutOfBoundsException</li>
                    <li>ArithmeticException</li>
                    <li>IOException</li>
                </ul>
            `
        }
    ],
    python: [
        {
            title: 'Lists and Dictionaries',
            content: `
                <h2>Lists and Dictionaries in Python</h2>
                <p>Python provides powerful built-in data structures.</p>
                <h3>Lists:</h3>
                <p>Ordered, mutable collections.</p>
                <pre><code>fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits[0])  # apple</code></pre>
                <h3>List Methods:</h3>
                <ul>
                    <li>append(): Add item</li>
                    <li>remove(): Remove item</li>
                    <li>sort(): Sort list</li>
                    <li>len(): Get length</li>
                </ul>
                <h3>Dictionaries:</h3>
                <p>Key-value pairs.</p>
                <pre><code>student = {
    "name": "John",
    "age": 20,
    "grade": "A"
}
print(student["name"])  # John
student["age"] = 21  # Update</code></pre>
                <h3>Dictionary Methods:</h3>
                <ul>
                    <li>keys(): Get all keys</li>
                    <li>values(): Get all values</li>
                    <li>items(): Get key-value pairs</li>
                </ul>
            `
        },
        {
            title: 'Functions and Modules',
            content: `
                <h2>Functions and Modules in Python</h2>
                <h3>Functions:</h3>
                <p>Reusable blocks of code.</p>
                <pre><code>def greet(name):
    return f"Hello, {name}!"

result = greet("Alice")
print(result)  # Hello, Alice!</code></pre>
                <h3>Function with Default Parameter:</h3>
                <pre><code>def power(base, exp=2):
    return base ** exp

print(power(3))     # 9
print(power(3, 3))  # 27</code></pre>
                <h3>Modules:</h3>
                <p>Files containing Python code that can be imported.</p>
                <pre><code>import math
print(math.sqrt(16))  # 4.0

from datetime import datetime
print(datetime.now())</code></pre>
                <h3>Creating Your Own Module:</h3>
                <p>Save functions in a .py file and import it!</p>
            `
        },
        {
            title: 'File I/O',
            content: `
                <h2>File Input/Output in Python</h2>
                <p>Python makes file handling simple.</p>
                <h3>Reading Files:</h3>
                <pre><code># Method 1
file = open("data.txt", "r")
content = file.read()
file.close()

# Method 2 (Recommended)
with open("data.txt", "r") as file:
    content = file.read()
    print(content)</code></pre>
                <h3>Writing Files:</h3>
                <pre><code>with open("output.txt", "w") as file:
    file.write("Hello, World!")</code></pre>
                <h3>File Modes:</h3>
                <ul>
                    <li>"r": Read (default)</li>
                    <li>"w": Write (overwrites)</li>
                    <li>"a": Append</li>
                    <li>"r+": Read and write</li>
                </ul>
                <h3>Reading Line by Line:</h3>
                <pre><code>with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())</code></pre>
                <p>Always use <code>with</code> statement - it automatically closes the file!</p>
            `
        }
    ]
};

// Load lesson on page load
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const course = params.get('course') || 'c';
    const lesson = parseInt(params.get('lesson')) || 0;

    window.currentCourse = course;
    window.currentLesson = lesson;

    displayLesson();
});

function displayLesson() {
    const course = window.currentCourse;
    const lesson = window.currentLesson;

    if (!lessonDatabase[course] || !lessonDatabase[course][lesson]) {
        document.getElementById('lessonContent').innerHTML = '<p>Lesson not found</p>';
        return;
    }

    const lessonData = lessonDatabase[course][lesson];
    document.getElementById('lessonTitle').textContent = lessonData.title;
    document.getElementById('breadcrumb').textContent = `${course.toUpperCase()} Programming > Lesson ${lesson + 1}`;
    document.getElementById('lessonContent').innerHTML = lessonData.content;

    // Update button visibility
    const totalLessons = lessonDatabase[course].length;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const quizBtn = document.getElementById('quizBtn');

    prevBtn.style.display = lesson > 0 ? 'block' : 'none';
    nextBtn.style.display = lesson < totalLessons - 1 ? 'block' : 'none';
    quizBtn.href = `quiz.html?course=${course}&lesson=${lesson}`;
}

function previousLesson() {
    if (window.currentLesson > 0) {
        window.currentLesson--;
        window.location.href = `lesson.html?course=${window.currentCourse}&lesson=${window.currentLesson}`;
    }
}

function nextLesson() {
    const totalLessons = lessonDatabase[window.currentCourse].length;
    if (window.currentLesson < totalLessons - 1) {
        window.currentLesson++;
        window.location.href = `lesson.html?course=${window.currentCourse}&lesson=${window.currentLesson}`;
    }
}
