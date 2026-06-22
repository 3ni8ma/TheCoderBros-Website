export const frontendCode = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Preview</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; background: #0a0a0a; color: #e0e0e0; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; }
    h1 { background: linear-gradient(135deg, #D946EF, #6366F1, #22D3EE); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 2.5rem; margin-bottom: 1rem; }
    .card { background: #151515; border: 1px solid #222; border-radius: 12px; padding: 2rem; max-width: 400px; width: 100%; }
    button { background: linear-gradient(135deg, #D946EF, #6366F1); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; cursor: pointer; font-size: 1rem; transition: transform 0.2s; }
    button:hover { transform: scale(1.05); }
    input { width: 100%; padding: 0.75rem; background: #1a1a1a; border: 1px solid #333; border-radius: 8px; color: white; margin-bottom: 1rem; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello, World!</h1>
    <p style="margin-bottom: 1rem; color: #888;">Edit the code on the left to see changes in real-time.</p>
    <input type="text" placeholder="Enter your name..." />
    <button>Click Me</button>
  </div>
</body>
</html>`,
  css: `.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #0a0a0a;
  color: #e0e0e0;
  padding: 2rem;
}
.card {
  background: #151515;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 420px;
  width: 100%;
}
.gradient-text {
  background: linear-gradient(135deg, #D946EF, #6366F1, #22D3EE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.btn {
  background: linear-gradient(135deg, #D946EF, #6366F1);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px -10px rgba(217,70,239,0.4);
}
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  color: white;
  margin-bottom: 1rem;
}
.input:focus {
  outline: none;
  border-color: #6366F1;
}
`,
  js: `document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  const input = document.querySelector('input');
  
  if (button) {
    button.addEventListener('click', () => {
      const name = input?.value?.trim() || 'World';
      alert(\`Hello, \${name}! Welcome to The Coder Bros Sandbox.\`);
    });
  }
});

console.log('Frontend Lab is ready!');
console.log('Edit HTML, CSS, or JavaScript to see live preview.');
console.table([
  { language: 'HTML', status: 'Ready' },
  { language: 'CSS', status: 'Ready' },
  { language: 'JavaScript', status: 'Ready' }
]);

let count = 0;
const counterDisplay = document.createElement('div');
counterDisplay.style.cssText = 'text-align: center; margin-top: 1rem; font-size: 1.25rem;';

const counterBtn = document.createElement('button');
counterBtn.textContent = 'Count: 0';
counterBtn.style.cssText = 'width: 100%; margin-top: 1rem;';

counterBtn.addEventListener('click', () => {
  count++;
  counterBtn.textContent = \`Count: \${count}\`;
});

const card = document.querySelector('.card');
if (card) {
  card.appendChild(counterDisplay);
  card.appendChild(counterBtn);
}
`
};

export const backendDefaultCode: Record<string, string> = {
  python: `# Welcome to the Backend Lab!
# Write Python code and run it below.

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print("Fibonacci Sequence:")
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")

print("\\n--- Challenge ---")
print("Try modifying the code!")
`,
  javascript: `// Welcome to the Backend Lab!
// Write JavaScript code and run it below.

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log("Fibonacci Sequence:");
for (let i = 0; i < 10; i++) {
    console.log(\`F(\${i}) = \${fibonacci(i)}\`);
}
`,
  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Fibonacci Sequence:");
        for (int i = 0; i < 10; i++) {
            System.out.println("F(" + i + ") = " + fibonacci(i));
        }
    }
    
    static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
`,
  csharp: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Fibonacci Sequence:");
        for (int i = 0; i < 10; i++) {
            Console.WriteLine($"F({i}) = {Fibonacci(i)}");
        }
    }
    
    static int Fibonacci(int n) {
        if (n <= 1) return n;
        return Fibonacci(n-1) + Fibonacci(n-2);
    }
}
`,
  cpp: `#include <iostream>

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

int main() {
    std::cout << "Fibonacci Sequence:" << std::endl;
    for (int i = 0; i < 10; i++) {
        std::cout << "F(" << i << ") = " << fibonacci(i) << std::endl;
    }
    return 0;
}
`
};

export const languageMap: Record<string, string> = {
  python: "python",
  javascript: "javascript",
  java: "java",
  csharp: "csharp",
  cpp: "cpp"
};

export const pistonLanguageMap: Record<string, string> = {
  python: "python3",
  javascript: "node",
  java: "java",
  csharp: "csharp",
  cpp: "cpp"
};
