# 📘 JavaScript & TypeScript Guide

> **Phase 1: JavaScript Basics** — we’ll start with JavaScript first and later add TypeScript modules.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]() ![Node>=18](https://img.shields.io/badge/Node-%3E%3D18.x-informational)

---

## 🚀 What is this repo?

A step‑by‑step teaching guide with short lessons, runnable code samples, and practice exercises. Ideal for beginners and for instructors who want a ready‑to‑use syllabus.

* **Learn-by-doing**: every topic has examples you can run with Node.js.
* **Small steps**: each lesson fits in 10–20 minutes.
* **Scaffolded practice**: quick checks and exercises with solutions.

> Current focus: **Introduction → First Program → Commenting → Variables → Data Types**

---

## 🧭 Contents (Phase 1)

1. **[Introduction to JavaScript](#1-introduction-to-javascript)**
2. **[Your First Program](#2-your-first-program)**
3. **[Commenting](#3-commenting)**
4. **[Variables](#4-variables)**
5. **[Data Types](#5-data-types)**

> Coming next: Operators & Expressions · Control Flow · Functions · Arrays & Objects · ES6+ · Async JS · … then TypeScript!

---

## 📂 Repository Structure

```
js-and-ts-guide/
│
├─ javascript/
│  ├─ 01-introduction/
│  │  ├─ README.md
│  │  └─ snippets/
│  ├─ 02-first-program/
│  │  ├─ README.md
│  │  └─ hello.js
│  ├─ 03-commenting/
│  │  ├─ README.md
│  │  └─ comments.js
│  ├─ 04-variables/
│  │  ├─ README.md
│  │  ├─ let-const-var.js
│  │  └─ scope.js
│  └─ 05-datatypes/
│     ├─ README.md
│     ├─ primitives.js
│     └─ typeof-gotchas.js
│
├─ typescript/               # (placeholder for Phase 2)
│  └─ README.md
│
└─ README.md                 # you are here
```

---

## 🛠️ Prerequisites

* **Node.js 18+** (LTS recommended)
* A code editor (VS Code recommended)
* Basic terminal usage

Check your Node version:

```bash
node -v
```

---

## ▶️ How to Run Examples

```bash
# 1) Clone and open
git clone https://github.com/prashansilva/js-and-ts-guide.git
cd js-and-ts-guide

# 2) Run a sample file
node javascript/02-first-program/hello.js

# 3) Or open Node REPL
node
> console.log('Hello, JavaScript!')
```

> Each lesson folder has its own `README.md` with goals, notes, and exercises.

---

## 1) Introduction to JavaScript

**You’ll learn:** what JavaScript is, where it runs (browser, Node.js), how JS evolved, and why it’s everywhere.

**Key ideas:**

* Dynamic, high-level, multi-paradigm language
* Single-threaded event loop, non-blocking I/O
* ES6+ modern features

**Try now:**

```js
// Run this in Node REPL
[1, 2, 3].map(n => n * 2)
```

**Practice:**

* Name 3 places JavaScript runs.
* What is the difference between JS and Java? (trick question!)

---

## 2) Your First Program

**You’ll learn:** creating and running a `.js` file with Node.

**Steps:**

1. Create `hello.js`:

   ```js
   console.log('Hello, JavaScript!');
   ```
2. Run it:

   ```bash
   node hello.js
   ```

**Challenge:**

* Print your name and today’s date on separate lines.

---

## 3) Commenting

**You’ll learn:** writing helpful comments and when **not** to comment.

**Syntax:**

```js
// Single-line comment
/* Multi-line
   comment */
```

**Guidelines:**

* Explain **why**, not **what** obvious code does
* Keep comments updated; delete stale ones

**Exercise:**

* Add comments to `hello.js` explaining purpose and any assumptions.

---

## 4) Variables

**You’ll learn:** `let`, `const`, `var`, naming, scope, and reassignment.

**Essentials:**

```js
const pi = 3.14159;      // constant (cannot be reassigned)
let count = 0;           // block-scoped, can change
var legacy = 'avoid';    // function-scoped, avoid in modern JS

// Block scope example
{
  let x = 1;
  // console.log(x) ✅ here
}
// console.log(x) ❌ ReferenceError outside block
```

**Rules of thumb:**

* Prefer **`const`**; use **`let`** when you need reassignment
* Avoid **`var`**
* Use meaningful names (`camelCase` for variables and functions)

**Exercise:**

* Rewrite a snippet using `var` to use `let`/`const` properly; explain your choices.

---

## 5) Data Types

**You’ll learn:** the 7 primitive types + object; `typeof`; common pitfalls.

**Primitives:** `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, `null`

```js
typeof 'hi'        // 'string'
typeof 42          // 'number'
typeof 10n         // 'bigint'
typeof true        // 'boolean'
typeof undefined   // 'undefined'
typeof Symbol()    // 'symbol'
typeof null        // 'object'  <-- historical quirk
typeof {}          // 'object'
```

**Gotchas:**

* `typeof null === 'object'` (legacy quirk)
* `NaN` is a number: `Number.isNaN(NaN) === true`
* Strings are immutable

**Exercise:**

* Create variables for each primitive type and log both the value and `typeof` result.

---

## ✅ Progress Checklist

* [ ] I can explain where JavaScript runs
* [ ] I ran my first JS file with Node
* [ ] I use comments to clarify *why*
* [ ] I choose between `const` and `let` correctly
* [ ] I can list all primitive types and use `typeof`

---

## 🧪 (Optional) Self-Check

As the repo grows, folders will include small quizzes and solution files. Run them with `node` and compare your output.

---

## 🧩 Contributing

PRs are welcome! Improve explanations, add examples, or propose exercises.

1. Fork this repo
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

## 📅 Roadmap

* Phase 1 (JS Fundamentals): Operators · Control Flow · Functions · Arrays · Objects · ES6+ · Modules · Error Handling · Async (Callbacks → Promises → async/await)
* Phase 2 (TypeScript): Basic/Advanced Types · Interfaces · Generics · Classes · Utility Types · TS + Node/Frontend

---

## 📄 License

MIT — see `LICENSE` file.

---

### ⭐ Tips for Instructors

* Keep each lesson under 20 minutes, with 5 minutes practice
* Live-code from an empty file; narrate your thought process
* After each topic, ask a *why* question (e.g., “Why prefer `const`?”)
