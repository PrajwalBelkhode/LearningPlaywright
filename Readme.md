# 📘 LearningPlaywright

**Author:** Prajwal Belkhode

A comprehensive learning repository covering **JavaScript fundamentals**, **TypeScript basics**, and **Playwright test automation** — from foundational concepts to advanced topics like async/await, OOP, and browser automation architecture.

---

## 📑 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [JavaScript Chapters](#javascript-chapters)
- [Playwright & Automation](#playwright--automation)
- [Coding Challenges & Tasks](#coding-challenges--tasks)
- [Research & Documentation](#research--documentation)
- [Getting Started](#getting-started)
- [License](#license)

---

## About

This repository serves as a structured, hands-on learning path for:

1. **Core JavaScript** — Variables, operators, control flow, loops, arrays, strings, objects, functions, closures, callbacks, promises, async/await, and OOP.
2. **TypeScript** — Setup, configuration, and exercises.
3. **Playwright** — Architecture deep-dives, browser communication protocols, and automation test scripts.

Each topic is organized into numbered chapters with progressive examples and interview-style questions.

---

## Tech Stack

| Tool / Library | Version |
| --- | --- |
| Node.js | Latest LTS |
| Playwright | ^1.58.2 |
| @playwright/test | ^1.58.2 |
| TypeScript | ^6.0.2 |
| ts-node | ^10.9.2 |

---

## Repository Structure

```
LearningPlaywright/
├── chapter_01_Basics/              # Hello world, setup verification
├── chapter_02_JavaScript_concepts/ # Core JS concepts
├── chapter_03_Identifier_Literal_Operators_Statement/
├── chapter_04_Operators/
├── chapter_05_Statements/
├── chapter_06_Switch_Statements/
├── chapter_07_loops/
├── chapter_08_Arrays/
├── chapter_09_Functions/           # 26 files — arrow fns, closures, IIFE, HOF, etc.
├── chapter_10_Strings/
├── chapter_11_Objects/
├── chapter_12_Multidimensional_Arrays/
├── chapter_13_Callback/
├── chapter_14_Promise/             # Promise API, all, allSettled, race
├── chapter_15_Async_Await/         # try-catch, sequential & parallel execution
├── chapter_16_OOPs/                # Encapsulation, export/import modules
│
├── Playwright_JS_Basic_Test_1/     # Automation challenges (3 challenges + 1 question)
├── Playwright_JS_Basic_Test_3/     # Automation challenges (4 challenges + MCQs)
│
├── Tasks/                          # Practice exercises
│   ├── Arrays/
│   ├── Functions/
│   ├── MD_Arrays/
│   ├── for_loops/
│   ├── while_loops/
│   ├── TypeScript-Exercises/
│   ├── FizzBuzz.js
│   ├── Grade_calcualator.js
│   ├── Leap_year_Identifier.js
│   ├── Triangle_classifier.js
│   └── Increment-Decrement.js
│
├── Playwright_research.md          # Client-server, WebSocket, channeling
├── Playwright_Architecture.md      # Architecture overview
├── Selenium_vs_Playwright.md       # HTTP vs WebSocket comparison
├── Hoisting_TDZ.md                 # Hoisting & Temporal Dead Zone
├── TypeScript-Installation-Setup.md
│
├── package.json
├── tsconfig.json
└── Readme.md
```

---

## JavaScript Chapters

Each chapter builds on the previous one, progressing from basics to advanced topics:

| # | Chapter | Key Topics |
|---|---------|------------|
| 01 | **Basics** | Hello world, setup verification, running JS files |
| 02 | **JavaScript Concepts** | var / let / const, V8 engine |
| 03 | **Identifiers, Literals, Operators & Statements** | Naming rules, data types, expression basics |
| 04 | **Operators** | Arithmetic, comparison, logical, assignment |
| 05 | **Statements** | if-else, ternary, conditional logic |
| 06 | **Switch Statements** | Switch-case patterns |
| 07 | **Loops** | for, while, do-while, break, continue |
| 08 | **Arrays** | CRUD operations, iteration, array methods |
| 09 | **Functions** | Declarations, expressions, arrow fns, IIFE, closures, HOF, pure functions, rest/spread |
| 10 | **Strings** | String methods, manipulation |
| 11 | **Objects** | Object creation, properties, methods |
| 12 | **Multidimensional Arrays** | Nested arrays, matrix operations |
| 13 | **Callback** | Callback functions, callback patterns |
| 14 | **Promise** | Promise API, `.then()`, `.catch()`, `.finally()`, `Promise.all()`, `Promise.allSettled()`, `Promise.race()` |
| 15 | **Async / Await** | async functions, try-catch, sequential vs parallel execution, flaky API handling |
| 16 | **OOPs** | Encapsulation, ES modules (export/import) |

---

## Playwright & Automation

### Research & Architecture Docs

| Document | Description |
|----------|-------------|
| [Playwright_research.md](Playwright_research.md) | Client-server model, WebSocket communication, Chrome DevTools Protocol, channeling |
| [Selenium_vs_Playwright.md](Selenium_vs_Playwright.md) | HTTP vs WebSocket comparison, speed & event handling differences |
| [Playwright_Architecture.md](Playwright_Architecture.md) | High-level architecture overview |

### Test Script Challenges

- **`Playwright_JS_Basic_Test_1/`** — Challenges 01–03 and JS interview questions
- **`Playwright_JS_Basic_Test_3/`** — Challenges 01–04 and MCQ-based questions

---

## Coding Challenges & Tasks

The `Tasks/` directory contains standalone practice problems organized by topic:

| Category | Examples |
|----------|----------|
| **Arrays** | Array manipulation exercises |
| **Functions** | Function practice problems |
| **Loops** | `for` loop and `while` loop exercises |
| **Multidimensional Arrays** | Matrix / nested array problems |
| **TypeScript** | TypeScript-specific exercises |
| **Standalone** | FizzBuzz, Grade Calculator, Leap Year Identifier, Triangle Classifier, Increment-Decrement |

---

## Research & Documentation

| File | Topic |
|------|-------|
| [Hoisting_TDZ.md](Hoisting_TDZ.md) | Hoisting mechanism and Temporal Dead Zone explained with examples |
| [TypeScript-Installation-Setup.md](TypeScript-Installation-Setup.md) | Step-by-step TypeScript installation and project setup guide |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/PrajwalBelkhode/LearningPlaywright.git

# Navigate into the project
cd LearningPlaywright

# Install dependencies
npm install
```

### Running JavaScript Files

```bash
# Run any JS file directly with Node
node chapter_01_Basics/01_basic.js

# Run a task
node Tasks/FizzBuzz.js
```

### Running Playwright Tests

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run tests
npx playwright test
```

---

## License

This project is licensed under the **ISC** License.

---

> *Built with ❤️ while learning JavaScript, TypeScript, and Playwright.*
