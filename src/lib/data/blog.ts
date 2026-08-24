export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    description: "The five habits that quietly derail beginner developers - and the concrete fixes our mentors use to break them.",
    slug: "5-mistakes-beginner-coders-make",
    title: "5 Mistakes Beginner Coders Make (And How to Avoid Them)",
    date: "2026-08-08",
    category: "Career",
    readTime: 6,
    author: "Nivyadin Dey",
    image: "/images/blog/5-mistakes.jpg?v=2",
    content: `
Every developer has a graveyard of habits they had to unlearn. Here are the five most common mistakes beginners make — and the fixes that will save you months of frustration.

## 1. Copy-pasting code you don't understand

It is tempting to grab a solution from Stack Overflow and move on. But if you cannot explain what each line does, you are not learning — you are collecting.

**The fix:** rewrite the snippet by hand, then break it. Change values, remove parts, and observe what breaks. That experimentation is where understanding lives.

## 2. Watching tutorials instead of building

Tutorial hell is real. Videos feel productive, but the feeling fades the moment you close the tab.

**The fix:** follow the 80/20 rule — for every 20 minutes of tutorial, spend 80 minutes building something slightly different. Use the tutorial's idea, not its code.

## 3. Ignoring errors

Errors are not roadblocks; they are the compiler's way of teaching you. Panicking and re-running the same code does nothing.

**The fix:** read the first line of the traceback out loud. Then search for the exact message. Nine times out of ten the answer is a typo or a missing import.

## 4. Learning syntax instead of problem solving

Memorizing every method is impossible and pointless. Real programming is matching a problem to the right tool.

**The fix:** learn one approach deeply for each problem type — one way to loop, one way to handle a file, one way to structure a class. You can always learn alternatives later.

## 5. Giving up at the plateau

Progress comes in bursts with long flat stretches in between. That week where nothing makes sense? It is normal, and it usually precedes a big jump.

**The fix:** keep a "wins" log. Write down one thing you learned every day. When motivation dips, reading the log shows you how far you have come.

## The takeaway

The best programmers are not the fastest learners — they are the most persistent ones. Build small, break things on purpose, and never skip the boring parts.

_Happy coding!_
`
  },

  {
    slug: "data-structures-beginners-guide",
    description: "Arrays, stacks, queues, hash maps, and trees - the five structures behind 90% of real code, explained with analogies.",
    title: "Data Structures 101: The Beginner's Starter Guide",
    date: "2026-08-01",
    category: "Fundamentals",
    readTime: 8,
    author: "Aarush Karak",
    image: "/images/blog/data-structures.jpg?v=2",
    content: `
Data structures are the building blocks of every program you have ever used. This guide covers the five you will use 90% of the time — with real-world analogies and code.

## Arrays

Contiguous memory, instant access by index (O(1)), slow inserts in the middle (O(n)).

**Think of it as** a row of numbered lockers. You know exactly which locker holds what.

## Linked Lists

Nodes chained by pointers. O(1) inserts at the head, O(n) search.

**Think of it as** a treasure hunt where each clue points to the next. Great for queues and history — like the undo stack in your editor.

## Stacks & Queues

<!--

-->

## Hash Maps

Key-value storage with average O(1) lookups. The workhorse of modern code.

\`\`\`
counts = {}
for item in items:
    counts[item] = counts.get(item, 0) + 1
\`\`\`

**Think of it as** a dictionary — you do not flip through pages, you jump straight to the word.

## Trees

Hierarchical data — think file systems or the DOM of a webpage. Binary search trees keep data sorted so search stays O(log n).

## Where to practice

Start with these classic problems:

1. Two Sum (hash map)
2. Valid parentheses (stack)
3. Merge two sorted lists (linked list)
4. Invert a binary tree (recursion)

Solve them in our interactive labs, then move to LeetCode-style questions. The goal is not memorizing answers — it is recognizing which structure fits which problem.

## Choosing the right one

- Random access by index → array
- Fast inserts at the front → linked list
- LIFO processing → stack
- FIFO processing → queue
- Lookup by key → hash map
- Sorted ranges & hierarchies → tree

Master these five and every interview problem starts to look familiar.
`
  },

  {
    slug: "deploy-first-web-app",
    description: "From localhost to a live URL in under an hour with Git, GitHub, and a free deployment platform.",
    title: "Ship It: Deploying Your First Web App in an Hour",
    date: "2026-07-25",
    category: "DevOps",
    readTime: 7,
    author: "Ryan Banerjee",
    image: "/images/blog/deploy-web-app.jpg?v=2",
    content: `
You have built a project and it works on localhost. Congratulations — now the scary part: putting it on the internet. It does not have to be scary. Here is the fastest path from localhost to a live URL.

## Step 1: Git first

Everything starts with version control.

\`\`\`
git init
git add .
git commit -m "initial commit?v=2"
\`\`\`

Push to a GitHub repository — you will need it in the next step anyway.

## Step 2: Pick a platform

For your first deployment, choose a platform that handles the boring parts:

- **Vercel** — best for Next.js and React. Free tier, zero config.
- **Netlify** — excellent for static sites and serverless functions.
- **Railway** — friendly option when you need a full server or database.

All three connect to GitHub and auto-deploy on every push — no terminal needed.

## Step 3: Connect and deploy

On Vercel, click *Add New → Project*, select your repo, and the framework preset is usually detected automatically. Click deploy.

Within minutes you get a URL like \`my-app.vercel.app\`.

## Step 4: Custom domain (optional but satisfying)

Buy a domain from any registrar, then add it under *Project → Settings → Domains* and point the nameservers. Free certificates are handled for you.

## Step 5: The post-deploy checklist

1. Force-refresh and open the site on your phone
2. Check the browser console for errors
3. Verify forms actually send data
4. Look at your platform's function/invoke logs after a test run
5. Add a \`favicon.ico\` — a favicon makes it feel real

## Common pitfalls

- **Environment variables** — secret keys on a platform live in its dashboard, not in \`.env\`.
- **Stale cache** — after re-deploying, hard-refresh before reporting bugs.
- **Free-tier cold starts** — some free servers spin down after inactivity; first request may be slow. That is normal.

## Your mission

Deploy *something* this week — even a single-page site with your resume. Deployment is a skill like any other: the first time is the hardest, and every deploy after is routine.
`
  },

  {
    slug: "cpp-pointers-explained",
    description: "A pointer is just an address. A beginner-friendly mental model for references, dereferencing, and memory.",
    title: "C++ Pointers, Explained Like a Treasure Map",
    date: "2026-07-18",
    category: "C++",
    readTime: 8,
    author: "Aarush Karak",
    image: "/images/blog/cpp-pointers.jpg?v=2",
    content: `
Pointers scare beginners, but the concept is simple: a pointer is just a number that tells the computer where something lives in memory.

## The address bar of memory

Every variable has an address, like a house number on a street.

\`\`\`cpp
int score = 42;
std::cout << &score;  // 0x7ffee2c3d8a4 — the "address" of score
\`\`\`

\`&score\` gives you the address. A pointer *stores* that address:

\`\`\`cpp
int* ptr = &score;   // ptr points to score
std::cout << *ptr;   // 42 — dereference: read the house
*ptr = 100;          // write through the pointer
std::cout << score;  // 100 — score changed!
\`\`\`

## Why bother?

1. **Avoid copying large data** — pass a pointer instead of copying a whole array.
2. **Share one value across functions.**
3. **Build dynamic structures** — linked lists and trees are trees of pointers.

## Pointers and arrays are siblings

\`\`\`cpp
int nums[] = {10, 20, 30};
int* p = nums;        // decay: array becomes pointer to first element
std::cout << *(p + 1); // 20 — pointer arithmetic
\`\`\`

## The two great enemies

**Null pointers** — a pointer pointing nowhere. Always check before dereferencing:

\`\`\`cpp
if (ptr != nullptr) { /* safe */ }
\`\`\`

**Dangling pointers** — pointing at memory that was freed. Prefer smart pointers in modern C++:

\`\`\`cpp
auto p = std::make_unique<int>(42); // auto-cleaned, no delete needed
\`\`\`

## The mental model

| If pointers are | then |
|---|---|
| street addresses | \`*\` is "open the door" |
| \`&\` is "ask for the address" | referencing |
| \`nullptr\` is "this address is empty" | sentinel |

## Practice

Write a function that swaps two numbers using pointers. Then rewrite it with references (\`int&\`) and compare readability. You will use both forever.

Pointers are not the enemy — they are just the computer opening its doors for you.
`
  },

  {
    slug: "javascript-frameworks-2026",
    description: "React, Vue, or Svelte in 2026? An honest comparison of philosophy, ecosystem, and career impact.",
    title: "JavaScript Frameworks in 2026: React, Vue, or Svelte?",
    date: "2026-07-11",
    category: "JavaScript",
    readTime: 8,
    author: "Nivyadin Dey",
    image: "/images/blog/js-frameworks.jpg?v=2",
    content: `
Pick a framework and people will argue with you. The truth is that all three main contenders ship production apps every day — the difference is philosophy, not capability.

## React: the industry standard

**Philosophy:** explicit re-renders; "everything is a component.?v=2"

- Huge ecosystem — libraries for every feature you can imagine
- Massive job market; knowing React opens doors everywhere
- The \`useEffect\` and re-render mental model takes time to master

**Best for:** teams, large apps, careers.

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\`

## Vue: the approachable one

**Philosophy:** gentle learning curve, single-file components with HTML-like templates.

- Excellent documentation (arguably the best of the three)
- Built-in transitions and state needs no extra packages for small apps
- Less job demand than React in most markets

**Best for:** solo developers, startups, teams that value developer happiness.

## Svelte: the compiler

**Philosophy:** no virtual DOM — compile away the framework at build time.

- Tiny bundle sizes and real performance wins on low-end devices
- Truly reactive: \`let count = 0\` and the UI just updates
- Smallest ecosystem — you will build more yourself

**Best for:** performance-sensitive sites, small teams, the curious.

\`\`\`svelte
<script>
  let count = 0;
</script>

<button on:click={() => count++}>{count}</button>
\`\`\`

## A practical decision table

| You care about | Choose |
|---|---|
| Getting a job | React |
| Fast development | Vue |
| Bundle size / performance | Svelte |
| Learning HTML-first | Vue |
| Component genius | Svelte |

## The meta lesson

Frameworks come and go, but the skills underneath — state management, event handling, component composition — transfer between all of them. Pick one, build three projects with it, then try another. You will find the differences teach you more than any tutorial ever could.
`
  },

  {
    slug: "java-vs-csharp-backend",
    description: "Java and C# look alike on paper. The real differences are in ecosystems, tooling, and job markets.",
    title: "Java vs C#: Choosing Your Backend Language",
    date: "2026-07-04",
    category: "Backend",
    readTime: 7,
    author: "Ryan Banerjee",
    image: "/images/blog/java-vs-csharp.jpg?v=2",
    content: `
Java and C# share a common ancestor, and after twenty years of evolution they still look surprisingly similar. If you are choosing a backend language for your first serious project, here is the honest comparison.

## The surface level

\`\`\`java
public class Greeter {
    public static String greet(String name) {
        return "Hello, " + name;
    }
}
\`\`\`

\`\`\`csharp
public class Greeter {
    public static string Greet(string name) => $"Hello, {name}";
}
\`\`\`

Familiar? Right — the syntax is near-identical. The real differences are in the ecosystem.

## Java

- **The king of enterprise.** Banking, insurance, and every large company in between.
- **Spring Boot** is a kitchen-sink framework: security, ORM, messaging — all included.
- Android development uses Java-compatible tools (Kotlin now, but Java roots).
- Massive community; if a problem exists, someone has solved it in Java.

## C#

- **The Windows-native crown jewel.** Best-in-class tooling with Visual Studio.
- **ASP.NET Core** is fast — often beating Java on raw benchmarks.
- C# keeps innovating faster; records, pattern matching, and top-level statements keep it modern.
- Perfect pairing with Azure and the whole .NET ecosystem.

## The ecosystem comparison

| Concern | Java | C# |
|---|---|---|
| Job market | Huge, worldwide | Strong, Europe & US mix |
| Frameworks | Spring Boot, Quarkus, Micronaut | ASP.NET Core |
| Cloud comfort | AWS, GCP | Azure |
| Learning curve | Verbose → modern Java eased it | Modern C# is very readable |
| Open source | Yes (OpenJDK) | Yes (.NET is MIT) |

## Which should you learn?

- Choose **Java** if you want finance/enterprise stability or plan to touch Android.
- Choose **C#** if you like tooling magic, game dev (Unity), or want Windows-native careers.
- Choose **either** if you just want a strong backend language — both transfer well.

## A tip from both worlds

Learn the OOP fundamentals through one, then port a project to the other. The shock of how similar they are — and the handful of differences — will teach you more than a year of tutorials.
`
  },

  {
    slug: "ultimate-vscode-setup",
    description: "Settings, fonts, extensions, and shortcuts that earn their keep - a ten-minute VS Code power setup.",
    title: "The Ultimate VS Code Setup in 10 Minutes",
    date: "2026-06-28",
    category: "Productivity",
    readTime: 6,
    author: "Aarush Karak",
    image: "/images/blog/vscode-setup.jpg?v=2",
    content: `
Your editor is your home for the next few years. Ten minutes of setup now will save you hours every single week. Here is exactly what to install and configure.

## The settings that matter

Open \`settings.json\` (Cmd+Shift+P → "Open User Settings JSON") and add:

\`\`\`json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit?v=2"
  },
  "editor.minimap.enabled": false,
  "editor.bracketPairColorization.enabled": true,
  "files.autoSave": "afterDelay",
  "workbench.colorTheme": "One Dark Pro",
  "terminal.integrated.defaultProfile.osx": "zsh?v=2"
}
\`\`\`

## Fonts

Install **JetBrains Mono** or **Fira Code** and enable ligatures — your code will read better instantly:

\`\`\`json
"editor.fontFamily": "'JetBrains Mono', 'Fira Code', monospace",
"editor.fontLigatures": true,
\`\`\`

## The extension stack

**Every language starter:**

- **ESLint** + **Prettier** — consistent formatting on save
- **Error Lens** — shows errors inline as you type
- **Path Intellisense** — autocomplete file paths
- **GitLens** — blame, history, and diff insights
- **Todo Tree** — never lose a \`TODO\` again

**Per language:**

- Python → Python (Microsoft) + Pylance + Ruff
- JavaScript/TS → ESLint + TypeScript? — Next.js workspaces handle this
- Anything Docker → Docker extension

## The keyboard shortcuts you will actually use

| Shortcut | Action |
|---|---|
| \`Cmd+P\` | Quick open any file |
| \`Cmd+Shift+P\` | Command palette |
| \`Cmd+Shift+L\` | Select all occurrences |
| \`Alt+↑/↓\` | Move line |
| \`Cmd+D\` | Select next match |
| \`Cmd+\`\` | Toggle terminal |

## Multi-cursor: the superpower

Place the cursor on a word, press \`Cmd+D\` repeatedly to select all occurrences, then type once. Renaming variables, editing tables, and reshaping arrays become a single keystroke flow.

## Snippets beat typing

Create custom snippets for your boilerplate:

\`\`\`json
"Print to console": {
  "scope": "javascript,typescript",
  "prefix": "cl",
  "body": ["console.log($1);"],
  "description": "Log to console?v=2"
}
\`\`\`

## One more thing

Install **Code Spell Checker**. Misspelled variables are the silent bugs — it catches them while you type.

Ten minutes of setup, a lifetime of faster coding. Now go make it yours.
`
  },

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
    author: "Aarush Karak",
    date: "2026-06-15",
    category: "Python",
    readTime: 5,
    image: "/images/blog/python.jpg?v=2",
  },
  {
    slug: "javascript-async-await",
    title: "Understanding Async/Await in JavaScript",
    description: "Master asynchronous programming in JavaScript with async/await patterns and error handling.",
    content: `## The Problem with Callbacks

Before async/await, JavaScript developers used callbacks and promises to handle asynchronous operations, leading to "callback hell.?v=2"

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
    author: "Nivyadin Dey",
    date: "2026-06-10",
    category: "JavaScript",
    readTime: 6,
    image: "/images/blog/javascript-async-await.jpg?v=2",
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
myCar.start(); // "Electric motor activated?v=2"
\`\`\`
`,
    author: "Ryan Banerjee",
    date: "2026-06-05",
    category: "Java",
    readTime: 7,
    image: "/images/blog/java-oop.jpg?v=2",
  },
  {
    slug: "understanding-big-o-notation",
    title: "Big O Notation: How to Measure Code Efficiency",
    description: "A practical guide to understanding time complexity and why it matters for every line of code you write.",
    date: "2026-08-21",
    category: "Computer Science",
    readTime: 6,
    author: "Aarush Karak",
    image: "/images/blog/big-o.jpg?v=2",
    content: `

Every line of code you write has a cost. Big O notation tells you how that cost grows as your input grows — and understanding it is the difference between code that scales and code that crumbles.

## What Big O Actually Measures

Big O describes the upper bound of an algorithm's growth rate. It does not measure execution time directly — it measures how execution time changes as the input size increases.

**Think of it as** a growth forecast. If your algorithm is O(n), doubling the input doubles the work. If it is O(n²), doubling the input quadruples the work.

## Common Complexities

| Big O | Name | Example | When n = 1,000,000 |
| --- | --- | --- | --- |
| O(1) | Constant | Array index access | 1 step |
| O(log n) | Logarithmic | Binary search | ~20 steps |
| O(n) | Linear | Loop through array | 1,000,000 steps |
| O(n log n) | Linearithmic | Merge sort | ~20,000,000 steps |
| O(n²) | Quadratic | Nested loops | 1,000,000,000,000 steps |

## How to Identify Big O

1.  **Count the loops.** One loop over n items is O(n). Two nested loops over n items is O(n²).
2.  **Look for divides.** If you halve the input each step, it is O(log n).
3.  **Ignore constants.** O(2n) is still O(n). Constants do not matter at scale.
4.  **Identify the dominant term.** If you have O(n + n²), the n² dominates, so it is O(n²).

## Real-World Example

Searching for a name in an unsorted list of 1 million entries:

1.  Check each one: O(n) — up to 1,000,000 comparisons
2.  Sort first, then binary search: O(n log n) + O(log n) — about 20,000,200 comparisons

For one search, the sorted approach is slower. For 100 searches, it is 50x faster. Big O helps you decide when the upfront cost is worth it.

**The fix:** before optimizing, identify the Big O of your current approach. Then ask: will this still work when the data grows 10x? If not, it is time to rethink.

## The Takeaway

Big O is not about memorizing formulas — it is about predicting behavior at scale. Learn to read it, and you will write better code without even trying.

_Happy coding!_
`
  },
  {
    slug: "recursion-simply-explained",
    title: "Recursion Simply Explained: When Functions Call Themselves",
    description: "Recursion is one of the most powerful patterns in programming. Here is how it works, with examples you can run today.",
    date: "2026-08-22",
    category: "Computer Science",
    readTime: 5,
    author: "Nivyadin Dey",
    image: "/images/blog/fundamentals.jpg?v=2",
    content: `

A function that calls itself sounds like a recipe for an infinite loop. But when done right, recursion is one of the cleanest ways to solve problems that involve repetition, branching, or backtracking.

## The Basic Idea

Recursion means a function calls itself with a smaller or simpler input. Each call moves closer to a **base case** — a condition that stops the recursion.

**Think of it as** Russian nesting dolls. You open one doll, find a smaller one inside. You open that, find an even smaller one. Eventually you reach the smallest doll — that is your base case.

## A Working Example

\`\`\`python
def factorial(n):
    if n <= 1:       # Base case
        return 1
    return n * factorial(n - 1)  # Recursive call

print(factorial(5))  # 120
\`\`\`

Each call multiplies \`n\` by the result of \`factorial(n-1)\`, working down to the base case.

## When to Use Recursion

-   **Tree traversal** — navigating file systems, DOM trees, or organizational charts
-   **Divide and conquer** — merge sort, quicksort, binary search
-   **Backtracking** — solving mazes, Sudoku, or pathfinding problems
-   **Mathematical definitions** — factorial, Fibonacci, Tower of Hanoi

## The Common Trap

Forgetting the base case leads to infinite recursion and a \`RecursionError\`. Always define your exit condition first.

**Best for:** problems where the solution naturally branches into smaller subproblems. If your problem is a simple loop, use a loop — recursion adds overhead.

## The Takeaway

Recursion is a tool, not a hammer. Use it when the problem is naturally recursive, and always make sure the base case is reachable.

_Happy coding!_
`
  },
  {
    slug: "git-internals-how-it-actually-works",
    title: "Git Internals: How It Actually Works Under the Hood",
    description: "Understanding what Git stores, how commits work, and why branches are just pointers.",
    date: "2026-08-23",
    category: "Tools",
    readTime: 7,
    author: "Nivyadin Dey",
    image: "/images/blog/tools.jpg?v=2",
    content: `

You use Git every day, but do you know what it actually stores? Understanding Git's internals changes how you use it — and makes recovery from mistakes much easier.

## Git Is a Content-Addressable Store

Every file Git tracks is stored as a **blob** — a compressed snapshot identified by a SHA-1 hash. Every directory is a **tree** — a list of blobs and subtrees. Every commit is a pointer to a tree, plus metadata (author, message, parent commits).

**Think of it as** a ledger where every entry is identified by its content, not its position. If two files have the same content, they share the same blob.

## How Commits Work

A commit does not store a diff. It stores a complete snapshot of the project at that point. Git computes diffs on the fly when you run \`git diff\`. This is why \`git checkout\` is fast — it just swaps the tree pointer.

\`\`\`bash
git log --oneline --graph
# * a1b2c3d (HEAD -> main) Update README
# * e4f5g6h Initial commit
\`\`\`

Each hash is a commit object containing: the tree hash, parent commit hash(es), author, committer, and message.

## Branches Are Just Pointers

A branch is a 41-byte file containing the SHA-1 hash of the latest commit. That is it. When you make a new commit, Git updates the branch pointer to point to the new commit.

\`\`\`bash
git branch feature
# Creates a 41-byte file at .git/refs/heads/feature
\`\`\`

This is why branches are cheap in Git — they are just pointers, not copies.

## Reflogs: Git's Safety Net

Git keeps a log of every reference change in \`.git/logs/\`. Even after a \`git reset --hard\`, your commits still exist in the reflog for about 30 days. This is how you recover "lost" commits.

**The fix:** if you ever lose a commit, check \`git reflog\`. The commit is almost certainly still there.

## The Takeaway

Git is simpler than it looks: blobs, trees, commits, and pointers. Understanding this model makes every Git command more predictable and every mistake recoverable.

_Happy coding!_
`
  },
  {
    slug: "css-specificity-once-and-for-all",
    title: "CSS Specificity Explained Once and For All",
    description: "Why your styles are not applying and how to fix it without !important.",
    date: "2026-08-24",
    category: "Web Development",
    readTime: 5,
    author: "Aarush Karak",
    image: "/images/blog/webdev.jpg",
    content: `

You have written the perfect CSS rule. It targets the right element, uses the right property, and it does not work. The culprit is almost always specificity.

## How Specificity Works

CSS specificity is a scoring system that determines which rule wins when multiple rules target the same element. The scores are:

1.  **Inline styles** (1000 points) — \`style="color: red"\`
2.  **IDs** (100 points) — \`#header\`
3.  **Classes, attributes, pseudo-classes** (10 points) — \`.nav\`, \`[type=text]\`, \`:hover\`
4.  **Elements and pseudo-elements** (1 point) — \`div\`, \`::before\`

**Think of it as** a card game. Inline styles are a royal flush. IDs are a full house. You cannot beat a higher category with more lower cards.

## Common Specificity Traps

\`\`\`css
/* This loses to #header p */
.content p { color: blue; }

/* This wins over .card */
#main .card { color: red; }
\`\`\`

## The Clean Solution

Use BEM naming (\`.block__element--modifier\`) or CSS Modules to create unique class names. This eliminates specificity battles entirely because every selector has the same weight.

**Best for:** avoid \`!important\` whenever possible. It overrides everything, including future changes you might want to make.

## The Takeaway

Specificity is not complicated — it is a four-digit score. Learn the numbers, and you will never fight your own CSS again.

_Happy coding!_
`
  },
];
