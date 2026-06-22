export const languages = [
  {
    slug: "python",
    title: "Python",
    icon: "python",
    color: "#22D3EE",
    gradient: "from-cyan-400 to-blue-500",
    description: "Master Python from basics to advanced. Perfect for data science, automation, and backend development.",
    lessons: [
      {
        title: "Variables & Data Types",
        slides: [
          {
            title: "Welcome to Python",
            content: `Python is a high-level, interpreted programming language known for its readability and versatility.

## Key Features
- **Readable & Clean**: Python's syntax emphasizes readability
- **Dynamically Typed**: No need to declare variable types
- **Interpreted**: Code runs line by line
- **Large Standard Library**: "Batteries included"

Python is used everywhere: web development, data science, AI, automation, and more.`,
            code: `print("Hello, Python!")`,
            language: "python"
          },
          {
            title: "Variables",
            content: `## Variables in Python

Variables are containers for storing data. Python is dynamically typed, meaning you don't need to declare the type explicitly.

### Naming Rules:
- Must start with a letter or underscore
- Can contain letters, numbers, and underscores
- Case-sensitive
- Cannot use reserved keywords

### Best Practices:
- Use snake_case for variable names
- Choose descriptive names`,
            code: `name = "Alice"
age = 25
height = 1.75
is_student = True

# Multiple assignment
x, y, z = 1, 2, 3

print(type(name))   # <class 'str'>
print(type(age))    # <class 'int'>
print(type(height)) # <class 'float'>`,
            language: "python"
          },
          {
            title: "Numbers & Strings",
            content: `## Working with Numbers

Python supports integers, floating-point numbers, and complex numbers.

## Strings

Strings are sequences of characters enclosed in quotes.

### String Operations:
- Concatenation: + 
- Repetition: *
- Slicing: [start:end:step]
- Formatting: f-strings`,
            code: `# Numbers
a = 10
b = 3.14
print(a + b)  # 13.14
print(a ** 2) # 100
print(a // 3) # 3

# f-strings
greeting = "Hello"
name = "World"
message = f"{greeting}, {name}!"
print(message)

# String methods
print(greeting.upper())
print(len(greeting))`,
            language: "python"
          },
          {
            title: "Lists & Tuples",
            content: `## Lists

Lists are ordered, mutable collections.

### List Comprehensions:
\`[expr for item in iterable if condition]\`

## Tuples

Tuples are ordered, **immutable** collections.`,
            code: `# Lists
fruits = ["apple", "banana", "cherry"]
fruits.append("date")
fruits.insert(1, "blueberry")

# List comprehension
squares = [x ** 2 for x in range(10)]
print(squares)

# Tuples
point = (3, 4)
x, y = point
print(f"Point: ({x}, {y})")

# Tuple unpacking
def min_max(lst):
    return min(lst), max(lst)

low, high = min_max([1, 5, 2, 8, 3])
print(f"Min: {low}, Max: {high}")`,
            language: "python"
          },
          {
            title: "Dictionaries & Sets",
            content: `## Dictionaries

Dictionaries store key-value pairs. They are mutable and ordered (Python 3.7+).

## Sets

Sets are unordered collections of unique elements.

### Set Operations:
- Union: | 
- Intersection: &
- Difference: -`,
            code: `# Dictionaries
student = {
    "name": "Alice",
    "age": 25,
    "courses": ["Math", "CS"]
}

print(student.get("grade", "N/A"))

# Dict comprehension
squares = {x: x ** 2 for x in range(5)}
print(squares)

# Sets
numbers = {1, 2, 3, 2, 1}
print(numbers)  # {1, 2, 3}

a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a | b)  # union
print(a & b)  # intersection`,
            language: "python"
          },
          {
            title: "Control Flow",
            content: `## Conditionals

Python uses \`if\`, \`elif\`, and \`else\`.

## Loops

### For Loops
Iterate over sequences.

### While Loops
Continue while condition is true.

### Loop Control
- \`break\`: Exit the loop
- \`continue\`: Skip to next iteration`,
            code: `# Conditionals
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "F"
print(f"Grade: {grade}")

# For loop
for i in range(5):
    print(i, end=" ")

# Enumerate
fruits = ["apple", "banana", "cherry"]
for idx, fruit in enumerate(fruits):
    print(f"{idx}: {fruit}")

# While loop
count = 0
while count < 5:
    print(count)
    count += 1`,
            language: "python"
          },
          {
            title: "Functions",
            content: `## Functions in Python

Functions are reusable blocks of code defined with \`def\`.

### Features:
- Default parameters
- Keyword arguments
- Variable-length arguments (\`*args\`, \`**kwargs\`)
- Lambda functions`,
            code: `# Basic function
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))
print(greet("Bob", "Hi"))

# Variable arguments
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4, 5))

# Lambda
square = lambda x: x ** 2
print(square(5))

# Filter with lambda
evens = list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4, 5]))
print(evens)`,
            language: "python"
          }
        ]
      },
      {
        title: "Data Structures & Algorithms",
        slides: [
          {
            title: "Stacks & Queues",
            content: `## Stacks (LIFO) and Queues (FIFO)

### Stack Operations:
- push: add to top
- pop: remove from top
- peek: look at top

### Queue Operations:
- enqueue: add to back
- dequeue: remove from front`,
            code: `# Stack using list
stack = []
stack.append(1)  # push
stack.append(2)
stack.append(3)
print(stack.pop())  # 3
print(stack.pop())  # 2

# Queue using collections.deque
from collections import deque
queue = deque()
queue.append(1)  # enqueue
queue.append(2)
queue.append(3)
print(queue.popleft())  # 1
print(queue.popleft())  # 2`,
            language: "python"
          },
          {
            title: "Linked Lists",
            content: `## Linked Lists

A linear data structure where elements (nodes) are connected via pointers.

### Types:
- **Singly Linked**: Each node points to next
- **Doubly Linked**: Each node points to next and previous`,
            code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        if not self.head:
            self.head = Node(data)
            return
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = Node(data)
    
    def display(self):
        curr = self.head
        while curr:
            print(curr.data, end=" -> ")
            curr = curr.next
        print("None")

ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.display()`,
            language: "python"
          }
        ]
      },
      {
        title: "Object-Oriented Programming",
        slides: [
          {
            title: "Classes & Objects",
            content: `## Object-Oriented Programming

### Key Concepts:
1. **Class**: Blueprint for creating objects
2. **Object**: Instance of a class
3. **Encapsulation**: Bundle data and methods
4. **Inheritance**: Create hierarchies
5. **Polymorphism**: Same interface, different implementations`,
            code: `class Dog:
    species = "Canis familiaris"
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} says Woof!"
    
    def __str__(self):
        return f"{self.name} ({self.age})"

buddy = Dog("Buddy", 3)
max_dog = Dog("Max", 5)

print(buddy.bark())
print(buddy.species)
print(buddy)`,
            language: "python"
          },
          {
            title: "Inheritance & Polymorphism",
            content: `## Inheritance

Inheritance allows a class to inherit attributes and methods from another class.

## Polymorphism

Different classes can define methods with the same name.`,
            code: `class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        raise NotImplementedError

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

animals = [Dog("Buddy"), Cat("Whiskers")]
for animal in animals:
    print(animal.speak())

# Multiple inheritance
class Flyer:
    def fly(self):
        return "Flying..."

class Swimmer:
    def swim(self):
        return "Swimming..."

class Duck(Flyer, Swimmer):
    pass

d = Duck()
print(d.fly(), d.swim())`,
            language: "python"
          }
        ]
      },
      {
        title: "Error Handling & File I/O",
        slides: [
          {
            title: "Exceptions",
            content: `## Exception Handling

### Try-Except-Finally:
- \`try\`: Code that might raise an exception
- \`except\`: Handle the exception
- \`else\`: Runs if no exception
- \`finally\`: Always runs`,
            code: `try:
    num = int(input("Enter a number: "))
    result = 10 / num
    print(f"Result: {result}")
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Can't divide by zero!")
else:
    print("No errors occurred!")
finally:
    print("This always runs")

# Custom exception
class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        super().__init__(f"Insufficient funds: {balance} < {amount}")

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(balance, amount)
    return balance - amount

try:
    withdraw(100, 200)
except InsufficientFundsError as e:
    print(e)`,
            language: "python"
          },
          {
            title: "File Operations",
            content: `## File I/O

### Opening Modes:
- \`'r'\`: Read (default)
- \`'w'\`: Write (overwrites)
- \`'a'\`: Append
- \`'b'\`: Binary mode

### Context Manager (\`with\`):
Automatically closes files.`,
            code: `# Writing to a file
with open("example.txt", "w") as f:
    f.write("Hello, File!\\n")
    f.write("This is line 2\\n")

# Reading from a file
with open("example.txt", "r") as f:
    content = f.read()
    print(content)

# CSV handling
import csv
data = [["Name", "Age"], ["Alice", 25], ["Bob", 30]]
with open("data.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(data)

# JSON handling
import json
person = {"name": "Alice", "age": 25}
with open("person.json", "w") as f:
    json.dump(person, f, indent=2)

with open("person.json", "r") as f:
    loaded = json.load(f)
    print(loaded)`,
            language: "python"
          }
        ]
      },
      {
        title: "Modules & Packages",
        slides: [
          {
            title: "Importing Modules",
            content: `## Modules and Packages

### Import Styles:
- \`import module\`
- \`from module import name\`
- \`import module as alias\`

### Python Standard Library:
- math, datetime, os, random, json, csv`,
            code: `import math
from datetime import datetime, timedelta
import json as js
from os import path

print(math.pi)
print(math.sqrt(16))

now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))

tomorrow = now + timedelta(days=1)
print(tomorrow)

import random
print(random.randint(1, 10))
print(random.choice(["a", "b", "c"]))`,
            language: "python"
          }
        ]
      }
    ]
  },
  {
    slug: "javascript",
    title: "JavaScript",
    icon: "javascript",
    color: "#F7DF1E",
    gradient: "from-yellow-400 to-orange-500",
    description: "Learn JavaScript — the language of the web. Covers ES6+, DOM manipulation, async patterns.",
    lessons: [
      {
        title: "JavaScript Fundamentals",
        slides: [
          {
            title: "Variables & Types",
            content: `## JavaScript Variables

### Declaration:
- \`let\`: Block-scoped, can be reassigned
- \`const\`: Block-scoped, cannot be reassigned
- \`var\`: Function-scoped (avoid)

### Data Types:
string, number, boolean, null, undefined, object, symbol, bigint`,
            code: `let name = "Alice";
const age = 25;

// Dynamic typing
let value = "Hello";
console.log(typeof value);
value = 42;
console.log(typeof value);

// Template literals
const greeting = \`Hello, \${name}! You are \${age}\`;
console.log(greeting);

// Strict vs loose equality
console.log(5 == "5");  // true
console.log(5 === "5"); // false`,
            language: "javascript"
          },
          {
            title: "Functions & Scope",
            content: `## Functions

### Declaration Styles:
1. Function Declaration: Hoisted
2. Function Expression: Not hoisted
3. Arrow Functions: Lexical this, concise

### Closure:
Inner function remembers outer scope.`,
            code: `// Function declaration
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Arrow function
const add = (a, b) => a + b;
const square = x => x * x;

// Higher-order function
function operate(a, b, fn) {
    return fn(a, b);
}
console.log(operate(5, 3, (x, y) => x + y));

// Closure
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`,
            language: "javascript"
          }
        ]
      },
      {
        title: "DOM Manipulation",
        slides: [
          {
            title: "Selecting & Modifying Elements",
            content: `## DOM Manipulation

### Selecting Elements:
- getElementById()
- querySelector()
- querySelectorAll()

### Modifying:
- textContent, innerHTML
- classList (add, remove, toggle)
- style property`,
            code: `// Selecting
const header = document.getElementById('header');
const firstBtn = document.querySelector('.btn');
const allBtns = document.querySelectorAll('.btn');

// Modifying
header.textContent = 'New Text';
header.classList.add('active');
header.classList.toggle('visible');
header.style.color = '#D946EF';

// Creating elements
const div = document.createElement('div');
div.textContent = 'Dynamic content';
document.body.appendChild(div);`,
            language: "javascript"
          },
          {
            title: "Events",
            content: `## Event Handling

### Common Events:
click, mouseover, keydown, submit, scroll

### Event Delegation:
Attach one listener to a parent.`,
            code: `const button = document.querySelector('#myBtn');
button.addEventListener('click', (e) => {
    console.log('Clicked!', e.target);
});

// Event delegation
const list = document.querySelector('#myList');
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log('Item:', e.target.textContent);
    }
});

// Form
const form = document.querySelector('#myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    console.log(Object.fromEntries(data));
});

// Keyboard
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') console.log('Enter!');
});`,
            language: "javascript"
          }
        ]
      },
      {
        title: "Async JavaScript",
        slides: [
          {
            title: "Callbacks & Promises",
            content: `## Asynchronous JavaScript

### Promises:
- pending: Initial state
- fulfilled: Completed
- rejected: Failed

### Methods:
- .then() / .catch() / .finally()`,
            code: `// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log('Done!'));

// Promise.all
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
Promise.all([p1, p2, p3])
    .then(values => console.log(values));

// Fetch API
fetch('/api/data')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));`,
            language: "javascript"
          },
          {
            title: "Async/Await",
            content: `## Async/Await

### Rules:
- async function always returns a Promise
- await pauses execution until Promise settles
- Use try/catch for errors`,
            code: `async function getUser(id) {
    try {
        const response = await fetch(\`/api/users/\${id}\`);
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Failed:', error);
        throw error;
    }
}

// Parallel execution
async function loadAll() {
    const [user, posts] = await Promise.all([
        fetch('/api/user').then(r => r.json()),
        fetch('/api/posts').then(r => r.json())
    ]);
    return { user, posts };
}`,
            language: "javascript"
          }
        ]
      },
      {
        title: "ES6+ Features",
        slides: [
          {
            title: "Modern Syntax",
            content: `## ES6+ Features

### Key Features:
- Destructuring
- Spread/Rest (...)
- Optional Chaining (?.)
- Nullish Coalescing (??)
- Map & Set`,
            code: `// Destructuring
const user = { name: 'Alice', age: 25, city: 'NYC' };
const { name, age, ...rest } = user;
console.log(name, age, rest);

// Spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];

const defaults = { theme: 'dark', lang: 'en' };
const settings = { ...defaults, lang: 'fr' };

// Optional chaining
const data = { user: { address: { city: 'NYC' } } };
console.log(data?.user?.address?.city);
console.log(data?.user?.phone?.number); // undefined

// Nullish coalescing
const value = null ?? 'default';
console.log(value);

// Map & Set
const map = new Map();
map.set('key', 'value');
console.log(map.get('key'));

const set = new Set([1, 2, 2, 3]);
console.log([...set]);`,
            language: "javascript"
          }
        ]
      }
    ]
  },
  {
    slug: "html-css",
    title: "HTML & CSS",
    icon: "html-css",
    color: "#E34F26",
    gradient: "from-orange-400 to-blue-400",
    description: "Build beautiful, responsive web interfaces with modern HTML5 and CSS3 including Flexbox and Grid.",
    lessons: [
      {
        title: "HTML Foundations",
        slides: [
          {
            title: "Document Structure",
            content: `## HTML Document Structure

### Key Elements:
- <!DOCTYPE html>: Declares HTML5
- <html>: Root element
- <head>: Metadata, links, scripts
- <body>: Visible content

### Semantic Elements:
header, nav, main, section, article, aside, footer`,
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h1>Welcome!</h1>
            <p>This is a semantic HTML page.</p>
        </section>
        
        <article>
            <h2>Blog Post</h2>
            <p>Content here...</p>
        </article>
    </main>
    
    <footer>
        <p>&copy; 2024 My Site</p>
    </footer>
</body>
</html>`,
            language: "html"
          },
          {
            title: "Forms & Inputs",
            content: `## HTML Forms

### Input Types:
text, email, password, number, tel, url, date, color, checkbox, radio, file

### Form Attributes:
required, placeholder, pattern, min, max, autocomplete`,
            code: `<form action="/submit" method="POST">
    <fieldset>
        <legend>Personal Info</legend>
        
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="0" max="150">
    </fieldset>
    
    <fieldset>
        <legend>Preferences</legend>
        
        <select name="country">
            <option value="">Select...</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
        </select>
        
        <label>
            <input type="checkbox" name="subscribe">
            Subscribe
        </label>
        
        <label>
            <input type="radio" name="plan" value="basic" checked>
            Basic
        </label>
        <label>
            <input type="radio" name="plan" value="premium">
            Premium
        </label>
    </fieldset>
    
    <button type="submit">Submit</button>
</form>`,
            language: "html"
          }
        ]
      },
      {
        title: "CSS Layouts",
        slides: [
          {
            title: "Flexbox",
            content: `## CSS Flexbox

### Container Properties:
- display: flex
- flex-direction: row | column
- justify-content: main axis alignment
- align-items: cross axis alignment
- flex-wrap: allow wrapping
- gap: spacing

### Item Properties:
- flex: grow shrink basis
- align-self: override`,
            code: `.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.item {
    flex: 1;
    min-width: 200px;
    padding: 2rem;
    background: linear-gradient(135deg, #D946EF, #6366F1);
    border-radius: 8px;
    color: white;
    text-align: center;
    transition: transform 0.3s ease;
}

.item:hover {
    transform: translateY(-5px);
}`,
            language: "css"
          },
          {
            title: "CSS Grid",
            content: `## CSS Grid

### Container Properties:
- display: grid
- grid-template-columns: column sizes
- grid-template-rows: row sizes
- grid-template-areas: named areas
- gap: spacing

### Item Properties:
- grid-column: column span
- grid-row: row span`,
            code: `.page {
    display: grid;
    grid-template-columns: 250px 1fr 200px;
    grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    gap: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
}

.featured {
    grid-column: span 2;
    grid-row: span 2;
}

@media (max-width: 768px) {
    .page {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header" "main" "sidebar" "footer";
    }
}`,
            language: "css"
          }
        ]
      },
      {
        title: "CSS Animations",
        slides: [
          {
            title: "Transitions & Keyframes",
            content: `## CSS Animations

### Transitions:
transition: property duration timing-function delay

### Keyframes:
Define multi-step animations.

### Animation Properties:
- animation-name, duration, timing-function
- iteration-count, direction, fill-mode`,
            code: `/* Transitions */
.button {
    background: #6366F1;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.button:hover {
    background: #D946EF;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(217, 70, 239, 0.3);
}

/* Keyframes */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animated-card {
    animation: slideIn 0.5s ease-out;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255,255,255,0.1);
    border-top-color: #22D3EE;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}`,
            language: "css"
          }
        ]
      }
    ]
  },
  {
    slug: "java",
    title: "Java",
    icon: "java",
    color: "#ED8B00",
    gradient: "from-orange-500 to-red-500",
    description: "Enterprise-grade Java programming. Covers OOP, collections, streams, and design patterns.",
    lessons: [
      {
        title: "Java Basics",
        slides: [
          {
            title: "Hello, Java!",
            content: `## Getting Started with Java

Java is a statically-typed, object-oriented language designed for portability.

### Key Components:
- **JVM**: Java Virtual Machine
- **JRE**: Java Runtime Environment
- **JDK**: Java Development Kit`,
            code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
        
        String name = "Alice";
        int age = 25;
        double salary = 75000.50;
        boolean isEmployed = true;
        
        System.out.printf("%s is %d years old%n", name, age);
        
        // Type conversion
        int x = 10;
        double y = x; // implicit
        double z = 3.14;
        int w = (int) z; // explicit
    }
}`,
            language: "java"
          },
          {
            title: "Control Flow",
            content: `## Control Flow

### Conditionals:
if-else if-else, switch

### Loops:
for (traditional + enhanced for-each)
while, do-while`,
            code: `public class ControlFlow {
    public static void main(String[] args) {
        int score = 85;
        String grade;
        if (score >= 90) grade = "A";
        else if (score >= 80) grade = "B";
        else grade = "C";
        System.out.println("Grade: " + grade);
        
        // Switch
        String day = "MONDAY";
        switch (day) {
            case "MONDAY" -> System.out.println("Start of week");
            case "SATURDAY", "SUNDAY" -> System.out.println("Weekend!");
            default -> System.out.println("Midweek");
        }
        
        // For-each
        int[] numbers = {1, 2, 3, 4, 5};
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
        
        // While
        int count = 0;
        while (count < 3) {
            System.out.println("Count: " + count);
            count++;
        }
    }
}`,
            language: "java"
          }
        ]
      },
      {
        title: "Object-Oriented Java",
        slides: [
          {
            title: "Classes & Objects",
            content: `## OOP in Java

### Key Concepts:
1. Encapsulation: private fields, public methods
2. Inheritance: extends keyword
3. Polymorphism: Method overriding
4. Abstraction: abstract classes, interfaces`,
            code: `public class BankAccount {
    private String accountNumber;
    private double balance;
    
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    public double getBalance() { return balance; }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("12345", 1000);
        account.deposit(500);
        account.withdraw(200);
        System.out.println("Balance: $" + account.getBalance());
    }
}`,
            language: "java"
          },
          {
            title: "Inheritance & Interfaces",
            content: `## Inheritance & Interfaces

### Inheritance:
- extends keyword
- Single class inheritance
- super to call parent methods

### Interfaces:
- Define contracts
- Multiple implementation supported
- default methods`,
            code: `abstract class Vehicle {
    protected String brand;
    public Vehicle(String brand) { this.brand = brand; }
    public abstract void start();
}

interface Electric {
    void charge();
}

interface Autonomous {
    void selfDrive();
}

class Tesla extends Vehicle implements Electric, Autonomous {
    public Tesla() { super("Tesla"); }
    
    @Override
    public void start() {
        System.out.println("Tesla starts silently");
    }
    
    @Override
    public void charge() {
        System.out.println("Charging...");
    }
    
    @Override
    public void selfDrive() {
        System.out.println("Autopilot engaged");
    }
}`,
            language: "java"
          }
        ]
      },
      {
        title: "Collections & Generics",
        slides: [
          {
            title: "Collections Framework",
            content: `## Java Collections

### List: ArrayList, LinkedList
### Set: HashSet, TreeSet
### Map: HashMap, TreeMap

### Stream API:
Functional operations on collections.`,
            code: `import java.util.*;

public class CollectionsDemo {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Alice", 95);
        scores.put("Bob", 87);
        
        for (Map.Entry<String, Integer> e : scores.entrySet()) {
            System.out.println(e.getKey() + ": " + e.getValue());
        }
        
        // Stream API
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6);
        List<Integer> evens = nums.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * n)
            .toList();
        System.out.println("Evens: " + evens);
        
        // Sorting
        List<String> names = Arrays.asList("Charlie", "Alice", "Bob");
        names.sort(Comparator.naturalOrder());
        System.out.println("Sorted: " + names);
    }
}`,
            language: "java"
          }
        ]
      }
    ]
  },
  {
    slug: "csharp",
    title: "C#",
    icon: "csharp",
    color: "#9B59B6",
    gradient: "from-purple-500 to-blue-500",
    description: "Modern C# development with .NET. Master LINQ, async patterns, and object-oriented programming.",
    lessons: [
      {
        title: "C# Fundamentals",
        slides: [
          {
            title: "Hello, C#!",
            content: `## Getting Started with C#

C# is a modern, type-safe, object-oriented language.

### Key Features:
- Strongly typed
- Garbage collected
- LINQ queries
- Async/await support`,
            code: `using System;

class Program {
    static void Main(string[] args) {
        Console.WriteLine("Hello, C#!");
        
        string name = "Alice";
        int age = 25;
        double salary = 75000.50;
        
        Console.WriteLine($"{name} is {age} years old");
        
        // Nullable types
        int? maybeNull = null;
        Console.WriteLine(maybeNull ?? -1);
        
        // Var keyword
        var message = "type inferred";
        
        // Pattern matching
        object obj = "Hello";
        if (obj is string str) {
            Console.WriteLine($"Length: {str.Length}");
        }
    }
}`,
            language: "csharp"
          },
          {
            title: "Control Flow & Methods",
            content: `## Control Flow

### Switch with Patterns:
C# 7+ supports pattern matching in switch.

### Methods:
- Default parameters
- Overloading
- ref, out, in modifiers`,
            code: `using System;

class Program {
    static void Main() {
        object value = 42;
        string result = value switch {
            int i when i > 0 => "Positive",
            int i => "Non-positive",
            string s => $"String: {s}",
            null => "Null",
            _ => "Unknown"
        };
        Console.WriteLine(result);
        
        var numbers = new[] { 1, 2, 3, 4, 5 };
        foreach (var num in numbers) {
            Console.Write($"{num} ");
        }
        Console.WriteLine();
        
        Console.WriteLine(Add(5, 3));
        Console.WriteLine(Add(5)); // default b=10
    }
    
    static int Add(int a, int b = 10) => a + b;
}`,
            language: "csharp"
          }
        ]
      },
      {
        title: "Object-Oriented C#",
        slides: [
          {
            title: "Classes & Properties",
            content: `## OOP in C#

### Properties:
- Auto-implemented: { get; set; }
- Expression-bodied: => expression

### Records (C# 9+):
Immutable data objects with value equality.`,
            code: `using System;

public class BankAccount {
    public string AccountNumber { get; }
    public decimal Balance { get; private set; }
    
    public BankAccount(string number, decimal balance) {
        AccountNumber = number;
        Balance = balance;
    }
    
    public void Deposit(decimal amount) {
        if (amount > 0) Balance += amount;
    }
    
    public bool Withdraw(decimal amount) {
        if (amount > 0 && amount <= Balance) {
            Balance -= amount;
            return true;
        }
        return false;
    }
}

public record Person(string Name, int Age);

class Program {
    static void Main() {
        var account = new BankAccount("12345", 1000);
        account.Deposit(500);
        account.Withdraw(200);
        Console.WriteLine($"Balance: {account.Balance}");
        
        var p1 = new Person("Alice", 25);
        var p2 = new Person("Alice", 25);
        Console.WriteLine(p1 == p2); // True
    }
}`,
            language: "csharp"
          }
        ]
      },
      {
        title: "LINQ & Async",
        slides: [
          {
            title: "Language Integrated Query",
            content: `## LINQ

### Query Syntax: SQL-like
### Method Syntax: Fluent API

### Common Operations:
Where, Select, OrderBy, GroupBy, Any, All, First`,
            code: `using System;
using System.Linq;
using System.Collections.Generic;

var people = new List<Person> {
    new("Alice", 25, "Engineering"),
    new("Bob", 35, "Marketing"),
    new("Charlie", 30, "Engineering")
};

// Query syntax
var engineers = from p in people
               where p.Department == "Engineering"
               orderby p.Name
               select p;

foreach (var e in engineers)
    Console.WriteLine(e.Name);

// Method syntax
var avgAge = people
    .Where(p => p.Department == "Engineering")
    .Average(p => p.Age);
Console.WriteLine($"Avg age: {avgAge}");

// Group by
var grouped = people.GroupBy(p => p.Department);
foreach (var g in grouped)
    Console.WriteLine($"{g.Key}: {g.Count()}");

public record Person(string Name, int Age, string Department);`,
            language: "csharp"
          },
          {
            title: "Async/Await",
            content: `## Async Programming

### Task-based Pattern:
- async keyword marks async method
- await suspends until task completes
- Task<T> represents async operation`,
            code: `using System;
using System.Threading.Tasks;
using System.Collections.Generic;

class Program {
    static async Task Main() {
        Console.WriteLine("Starting...");
        
        var result1 = await DoWorkAsync("Task 1", 1000);
        Console.WriteLine(result1);
        
        // Parallel
        var tasks = new List<Task<string>> {
            DoWorkAsync("A", 2000),
            DoWorkAsync("B", 1500),
            DoWorkAsync("C", 1000)
        };
        var results = await Task.WhenAll(tasks);
        Console.WriteLine(string.Join(", ", results));
    }
    
    static async Task<string> DoWorkAsync(string name, int delayMs) {
        await Task.Delay(delayMs);
        return $"{name} done in {delayMs}ms";
    }
}`,
            language: "csharp"
          }
        ]
      }
    ]
  },
  {
    slug: "cpp",
    title: "C++",
    icon: "cpp",
    color: "#00599C",
    gradient: "from-blue-600 to-cyan-400",
    description: "High-performance C++ programming covering memory management, STL, and modern C++ features.",
    lessons: [
      {
        title: "C++ Fundamentals",
        slides: [
          {
            title: "Hello, C++!",
            content: `## Getting Started with C++

C++ is a powerful, compiled language offering both high and low-level programming.

### Compilation:
\`g++ -std=c++20 -o program program.cpp\`

### Key Features:
- Manual memory management
- RAII (Resource Acquisition Is Initialization)
- Templates
- STL`,
            code: `#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    
    string name = "Alice";
    int age = 25;
    double pi = 3.14159;
    
    cout << name << " is " << age << " years old" << endl;
    
    auto message = "Modern C++";
    
    // Range-based for
    vector<int> numbers = {1, 2, 3, 4, 5};
    for (auto num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // nullptr
    int* ptr = nullptr;
    if (ptr == nullptr) {
        cout << "Pointer is null" << endl;
    }
    
    return 0;
}`,
            language: "cpp"
          },
          {
            title: "Pointers & References",
            content: `## Pointers and References

### Pointers:
- * declares/dereferences a pointer
- & address-of operator

### References:
- Alias to existing variables
- Must be initialized
- Cannot be reassigned

### Smart Pointers (C++11+):
unique_ptr, shared_ptr, weak_ptr`,
            code: `#include <iostream>
#include <memory>

using namespace std;

int main() {
    // Pointers
    int value = 42;
    int* ptr = &value;
    cout << "Value: " << *ptr << endl;
    *ptr = 100;
    cout << "Modified: " << value << endl;
    
    // References
    int x = 10;
    int& ref = x;
    ref = 20;
    cout << "x: " << x << endl;
    
    // Smart pointers
    auto unique = make_unique<int>(42);
    cout << "Unique: " << *unique << endl;
    
    auto shared1 = make_shared<int>(100);
    auto shared2 = shared1;
    cout << "Use count: " << shared1.use_count() << endl;
    
    return 0;
}`,
            language: "cpp"
          }
        ]
      },
      {
        title: "Object-Oriented C++",
        slides: [
          {
            title: "Classes & Inheritance",
            content: `## C++ Classes

### Access Specifiers:
- public, protected, private

### Virtual Functions:
Enable runtime polymorphism.
Override keyword (C++11+).`,
            code: `#include <iostream>
#include <memory>
#include <vector>

using namespace std;

class Animal {
protected:
    string name;
public:
    Animal(const string& n) : name(n) {}
    virtual ~Animal() {}
    virtual void speak() const {
        cout << name << " makes a sound" << endl;
    }
};

class Dog : public Animal {
public:
    Dog(const string& n) : Animal(n) {}
    void speak() const override {
        cout << name << " says Woof!" << endl;
    }
};

class Cat : public Animal {
public:
    Cat(const string& n) : Animal(n) {}
    void speak() const override {
        cout << name << " says Meow!" << endl;
    }
};

int main() {
    vector<unique_ptr<Animal>> animals;
    animals.push_back(make_unique<Dog>("Buddy"));
    animals.push_back(make_unique<Cat>("Whiskers"));
    
    for (const auto& a : animals) {
        a->speak();
    }
    return 0;
}`,
            language: "cpp"
          }
        ]
      },
      {
        title: "STL & Modern C++",
        slides: [
          {
            title: "Standard Template Library",
            content: `## STL Containers

### Sequence: vector, deque, list, array
### Associative: set, map, unordered_set, unordered_map

### Algorithms:
sort, find, transform, accumulate, count_if

### Lambdas:
Anonymous functions (C++11+).`,
            code: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

using namespace std;

int main() {
    vector<int> nums = {5, 2, 8, 1, 9, 3};
    
    // Sort
    sort(nums.begin(), nums.end());
    for (int n : nums) cout << n << " ";
    cout << endl;
    
    // Find
    auto it = find(nums.begin(), nums.end(), 8);
    if (it != nums.end()) {
        cout << "Found at: " 
             << distance(nums.begin(), it) << endl;
    }
    
    // Transform
    vector<int> doubled(nums.size());
    transform(nums.begin(), nums.end(), doubled.begin(),
              [](int n) { return n * 2; });
    
    // Accumulate
    int sum = accumulate(nums.begin(), nums.end(), 0);
    cout << "Sum: " << sum << endl;
    
    // Lambda
    auto isEven = [](int n) { return n % 2 == 0; };
    int evens = count_if(nums.begin(), nums.end(), isEven);
    cout << "Evens: " << evens << endl;
    
    return 0;
}`,
            language: "cpp"
          }
        ]
      }
    ]
  }
];

export type Language = (typeof languages)[number];
export type Lesson = Language["lessons"][number];
export type Slide = Lesson["slides"][number];

export function getCourse(slug: string) {
  return languages.find(l => l.slug === slug) || null;
}

export function searchCourses(query: string) {
  const q = query.toLowerCase();
  return languages.filter(l =>
    l.title.toLowerCase().includes(q) ||
    l.description.toLowerCase().includes(q) ||
    l.lessons.some(lesson =>
      lesson.title.toLowerCase().includes(q) ||
      lesson.slides.some(s => s.title.toLowerCase().includes(q))
    )
  );
}
