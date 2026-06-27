export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-python",
    title: "Getting Started with Python: A Beginner's Guide",
    description: "Learn the fundamentals of Python programming, from variables to functions, with practical examples.",
    content: `## Why Python?

Python is one of the most beginner-friendly programming languages. Its clean syntax and readability make it perfect for newcomers, while its power and versatility make it a favorite among professionals.

## Setting Up

Install Python from python.org, then verify with:

\`\`\`bash
python --version
\`\`\`

## Your First Program

\`\`\`python
print("Hello, World!")
\`\`\`

## Variables & Data Types

\`\`\`python
name = "Alice"        # String
age = 25              # Integer
height = 5.6          # Float
is_student = True     # Boolean
\`\`\`

## Lists & Loops

\`\`\`python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
\`\`\`
`,
    author: "Alex Rivera",
    date: "2026-06-15",
    category: "Python",
    readTime: 5,
  },
  {
    slug: "javascript-async-await",
    title: "Understanding Async/Await in JavaScript",
    description: "Master asynchronous programming in JavaScript with async/await patterns and error handling.",
    content: `## The Problem with Callbacks

Before async/await, JavaScript developers used callbacks and promises to handle asynchronous operations, leading to "callback hell."

## Enter Async/Await

\`\`\`javascript
async function fetchUserData(userId) {
  const response = await fetch(\`/api/users/\${userId}\`);
  const data = await response.json();
  return data;
}
\`\`\`

## Error Handling

\`\`\`javascript
async function getData() {
  try {
    const result = await fetch("/api/data");
    return await result.json();
  } catch (error) {
    console.error("Failed to fetch:", error);
    throw error;
  }
}
\`\`\`

## Running in Parallel

\`\`\`javascript
const [users, posts] = await Promise.all([
  fetch("/api/users").then(r => r.json()),
  fetch("/api/posts").then(r => r.json()),
]);
\`\`\`
`,
    author: "Marcus Chen",
    date: "2026-06-10",
    category: "JavaScript",
    readTime: 6,
  },
  {
    slug: "java-oop-fundamentals",
    title: "Java OOP Fundamentals: Classes, Inheritance, and Polymorphism",
    description: "Dive into object-oriented programming in Java with practical examples and best practices.",
    content: `## Classes and Objects

\`\`\`java
public class Car {
    private String model;
    private int year;
    
    public Car(String model, int year) {
        this.model = model;
        this.year = year;
    }
    
    public void start() {
        System.out.println(model + " is starting...");
    }
}
\`\`\`

## Inheritance

\`\`\`java
public class ElectricCar extends Car {
    private int batteryRange;
    
    public ElectricCar(String model, int year, int range) {
        super(model, year);
        this.batteryRange = range;
    }
    
    @Override
    public void start() {
        System.out.println("Electric motor activated");
    }
}
\`\`\`

## Polymorphism

\`\`\`java
Car myCar = new ElectricCar("Tesla", 2024, 350);
myCar.start(); // "Electric motor activated"
\`\`\`
`,
    author: "Sophia Williams",
    date: "2026-06-05",
    category: "Java",
    readTime: 7,
  },
];
