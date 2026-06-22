export const cheatsheets = [
  // Python
  { language: "Python", category: "Basics", title: "Variables", code: "name = \"Alice\"\nage = 25\nheight = 1.75\nis_student = True", description: "Python variables are dynamically typed" },
  { language: "Python", category: "Basics", title: "Data Types", code: "type(42)       # <class 'int'>\ntype(3.14)     # <class 'float'>\ntype(\"hello\")  # <class 'str'>\ntype(True)     # <class 'bool'>\ntype([1,2,3])  # <class 'list'>", description: "Common Python data types" },
  { language: "Python", category: "Strings", title: "String Methods", code: "\"hello\".upper()        # HELLO\n\"HELLO\".lower()        # hello\n\"  hi  \".strip()       # hi\n\"a,b,c\".split(\",\")    # ['a','b','c']\n\"-\".join([\"a\",\"b\"])   # a-b", description: "Common string operations" },
  { language: "Python", category: "Strings", title: "f-strings", code: "name = \"Alice\"\nage = 25\nprint(f\"{name} is {age} years old\")\nprint(f\"Pi = {3.14159:.2f}\")", description: "String interpolation" },
  { language: "Python", category: "Collections", title: "List Operations", code: "nums = [1, 2, 3]\nnums.append(4)\nnums.insert(0, 0)\nnums.pop()\nnums.sort()\n[x*2 for x in nums]", description: "Common list methods" },
  { language: "Python", category: "Collections", title: "Dict Operations", code: "d = {\"a\": 1, \"b\": 2}\nd[\"c\"] = 3\nd.get(\"x\", 0)\nd.keys()\nd.values()\nd.items()\n{k: v*2 for k,v in d.items()}", description: "Common dictionary methods" },
  { language: "Python", category: "Control Flow", title: "Conditionals", code: "if x > 0:\n    print(\"positive\")\nelif x == 0:\n    print(\"zero\")\nelse:\n    print(\"negative\")\n\n# Ternary\nres = \"even\" if x % 2 == 0 else \"odd\"", description: "If-elif-else and ternary" },
  { language: "Python", category: "Control Flow", title: "Loops", code: "for i in range(5):\nfor i, x in enumerate(lst):\nfor k, v in d.items():\nwhile x > 0:\n\n[x**2 for x in range(10) if x % 2 == 0]", description: "Loop patterns" },
  { language: "Python", category: "Functions", title: "Function Patterns", code: "def add(a, b=0, *args, **kwargs):\n    return a + b\n\n# Lambda\nsquare = lambda x: x**2\n\n# Decorator\ndef timer(fn):\n    def wrapper(*a, **kw):\n        import time\n        start = time.time()\n        result = fn(*a, **kw)\n        print(f\"took {time.time()-start}s\")\n        return result\n    return wrapper", description: "Function definition patterns" },
  { language: "Python", category: "OOP", title: "Class Basics", code: "class Dog:\n    species = \"Canine\"\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        return f\"{self.name} says Woof!\"", description: "Class definition structure" },
  { language: "Python", category: "File I/O", title: "File Operations", code: "with open(\"file.txt\", \"r\") as f:\n    content = f.read()\n    lines = f.readlines()\n    for line in f:\n        print(line.strip())\n\nwith open(\"file.txt\", \"w\") as f:\n    f.write(\"Hello\\n\")", description: "Reading and writing files" },

  // JavaScript
  { language: "JavaScript", category: "Basics", title: "Variables & Types", code: "let name = \"Alice\"\nconst age = 25\nvar old = \"avoid\"\n\ntypeof \"hello\"  // \"string\"\ntypeof 42       // \"number\"\ntypeof true     // \"boolean\"\ntypeof {}       // \"object\"\ntypeof []       // \"object\"", description: "Variable declarations and type checking" },
  { language: "JavaScript", category: "Strings", title: "String Methods", code: "\"hello\".toUpperCase()\n\"HELLO\".toLowerCase()\n\"  hi  \".trim()\n\"a,b,c\".split(\",\")\n[\"a\",\"b\"].join(\"-\")\n`Hello, ${name}!`", description: "String manipulation" },
  { language: "JavaScript", category: "Arrays", title: "Array Methods", code: "nums.push(4)\nnums.pop()\nnums.unshift(0)\nnums.shift()\nnums.slice(1,3)\nnums.splice(1,1)\nnums.map(x => x*2)\nnums.filter(x => x > 2)\nnums.reduce((a,b) => a+b, 0)", description: "Essential array operations" },
  { language: "JavaScript", category: "Functions", title: "Arrow Functions", code: "const add = (a, b) => a + b\nconst square = x => x * x\nconst greet = name => `Hello ${name}`\n\n// Higher-order\nconst twice = fn => x => fn(fn(x))", description: "Arrow function syntax" },
  { language: "JavaScript", category: "Objects", title: "Object Operations", code: "const user = { name: \"Alice\", age: 25 }\nuser.email = \"a@b.com\"\nconst { name, age } = user\nconst clone = { ...user }\nObject.keys(user)\nObject.values(user)\nObject.entries(user)", description: "Object manipulation" },
  { language: "JavaScript", category: "Async", title: "Promises & Async/Await", code: "fetch(url)\n  .then(res => res.json())\n  .catch(err => console.error(err))\n\nasync function getData() {\n    try {\n        const res = await fetch(url)\n        return await res.json()\n    } catch (err) {\n        console.error(err)\n    }\n}\n\nconst [a, b] = await Promise.all([p1, p2])", description: "Async patterns" },
  { language: "JavaScript", category: "DOM", title: "DOM Manipulation", code: "document.querySelector('.class')\ndocument.querySelectorAll('div')\nelem.textContent = 'text'\nelem.classList.add('active')\nelem.style.color = '#D946EF'\nelem.addEventListener('click', e => {\n    console.log(e.target)\n})", description: "DOM selection and manipulation" },

  // HTML/CSS
  { language: "HTML/CSS", category: "HTML", title: "Document Structure", code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Page</title>\n</head>\n<body>\n    <header>Nav</header>\n    <main>Content</main>\n    <footer>Footer</footer>\n</body>\n</html>", description: "Standard HTML5 template" },
  { language: "HTML/CSS", category: "CSS", title: "Flexbox", code: ".container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 1rem;\n}\n\n.item {\n    flex: 1 1 200px;\n}", description: "Flexbox layout reference" },
  { language: "HTML/CSS", category: "CSS", title: "Grid", code: ".grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n}\n\n.featured {\n    grid-column: span 2;\n}\n\n.responsive {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n}", description: "CSS Grid layout patterns" },
  { language: "HTML/CSS", category: "CSS", title: "Animations", code: ".element {\n    transition: all 0.3s ease;\n}\n\n@keyframes slideIn {\n    from { opacity: 0; transform: translateX(-20px); }\n    to { opacity: 1; transform: translateX(0); }\n}", description: "Transitions and keyframe animations" },

  // Java
  { language: "Java", category: "Basics", title: "Hello World", code: "public class Hello {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}", description: "Basic Java program structure" },
  { language: "Java", category: "Collections", title: "Collections & Streams", code: "List<String> list = new ArrayList<>();\nlist.add(\"a\");\n\nMap<String, Integer> map = new HashMap<>();\nmap.put(\"a\", 1);\n\nlist.stream()\n    .filter(s -> s.startsWith(\"a\"))\n    .map(String::toUpperCase)\n    .collect(Collectors.toList());", description: "Java Collections Framework" },

  // C#
  { language: "C#", category: "Basics", title: "Hello World", code: "using System;\n\nclass Program {\n    static void Main(string[] args) {\n        Console.WriteLine(\"Hello, World!\");\n    }\n}", description: "Basic C# program" },
  { language: "C#", category: "LINQ", title: "LINQ Queries", code: "var numbers = new[] { 1, 2, 3, 4, 5 };\n\nvar evens = from n in numbers\n            where n % 2 == 0\n            select n;\n\nvar squares = numbers\n    .Where(n => n % 2 == 0)\n    .Select(n => n * n);", description: "LINQ query and method syntax" },

  // C++
  { language: "C++", category: "Basics", title: "Hello World", code: "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}", description: "Basic C++ program" },
  { language: "C++", category: "Memory", title: "Pointers & References", code: "int value = 42;\nint* ptr = &value;\nint& ref = value;\n\n*ptr = 100;\n\nauto unique = std::make_unique<int>(42);\nauto shared = std::make_shared<int>(100);", description: "Pointer and reference syntax" },
  { language: "C++", category: "STL", title: "STL Containers", code: "#include <vector>\n#include <algorithm>\n\nstd::vector<int> nums = {3, 1, 4, 1, 5};\nstd::sort(nums.begin(), nums.end());\n\nauto it = std::find(nums.begin(), nums.end(), 4);\n\nstd::count_if(nums.begin(), nums.end(),\n    [](int n) { return n % 2 == 0; });", description: "STL algorithms and containers" }
];

export function searchCheatsheets(query: string) {
  const q = query.toLowerCase();
  return cheatsheets.filter(c =>
    c.title.toLowerCase().includes(q) ||
    c.language.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.code.toLowerCase().includes(q)
  );
}
