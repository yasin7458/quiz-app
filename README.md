<div align="center">

# 📝 JavaScript Quiz Application

### An Interactive Quiz Application Built with HTML, CSS & Vanilla JavaScript

<p align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

</p>

<p align="center">

A simple and interactive <b>JavaScript Quiz Application</b> developed using
<b>HTML</b>, <b>CSS</b>, and <b>Vanilla JavaScript</b>.

Users can answer multiple-choice questions, navigate between questions,
submit answers, and view their final score with percentage and pass/fail result.

</p>

</div>

---

# 📖 About The Project

The **JavaScript Quiz Application** is a beginner-friendly frontend project designed to improve JavaScript programming skills through practical implementation.

The application dynamically displays quiz questions stored inside a JavaScript array of objects. Every question includes four multiple-choice options, and users can select an answer before submitting it.

Each question has a **60-second timer**. If the user fails to answer within the allotted time, the application automatically moves to the next question and records it as a **Time Up Question**.

After completing all questions, the application calculates the user's score, percentage, number of correct answers, wrong answers, timed-out questions, and finally displays whether the user has **Passed** or **Failed**.

The project is developed completely using **HTML**, **CSS**, and **Vanilla JavaScript** without using any external libraries or frameworks.

---

# ✨ Features

| Feature | Description |
|----------|-------------|
| ❓ Dynamic Questions | Questions are generated dynamically using JavaScript |
| 📻 Multiple Choice Questions | Each question contains four options |
| ⏱️ 60 Seconds Timer | Every question has its own countdown timer |
| ⏭️ Next Button | Navigate to the next question |
| ⏮️ Previous Button | Return to previously visited questions |
| ✅ Submit Answer | Submit the selected answer |
| ⚠️ Answer Validation | Prevents submission without selecting an option |
| 📊 Score Calculation | Calculates the total correct answers |
| 📈 Percentage Calculation | Displays percentage after quiz completion |
| 🎯 Pass / Fail Result | Determines final result based on percentage |
| ⌛ Time Up Tracking | Records unanswered timed-out questions |
| 🔄 Dynamic Question Rendering | Questions are displayed using DOM Manipulation |
| 🎨 Modern User Interface | Clean and responsive layout |
| ⚡ Vanilla JavaScript | No external libraries or frameworks |

---

# 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure of the Quiz Application |
| CSS3 | Styling and Responsive Layout |
| JavaScript | Quiz Logic, Timer, DOM Manipulation & Score Calculation |

---

# 📂 Folder Structure

```text
JavaScript-Quiz/
│
├── 📄 index.html
├── 📄 style.css
├── 📄 script.js
│
└── 📄 README.md
```

---

# 📋 Quiz Data Structure

```javascript
const quiz = [

    {
        question: "What is JavaScript?",

        options: [

            "Programming Language",
            "Database",
            "Browser",
            "Operating System"

        ],

        answer: "Programming Language"
    }

];
```

Each question is stored as a JavaScript object containing:

- Question
- Four Options
- Correct Answer

The complete quiz is managed using an **Array of Objects**, making it easy to add, remove, or modify questions.

---

# ⚙️ Application Workflow

```text
                    Start
                      │
                      ▼
             Load Quiz Questions
                      │
                      ▼
         Display First Question
                      │
                      ▼
         Start 60 Second Timer
                      │
        ┌─────────────┴─────────────┐
        │                           │
        ▼                           ▼
 Select an Answer              Time Expires
        │                           │
        ▼                           ▼
 Click Submit             Store Time Up Question
        │                           │
        └─────────────┬─────────────┘
                      ▼
            Check Correct Answer
                      │
                      ▼
              Update Score
                      │
                      ▼
         Move To Next Question
                      │
                      ▼
       Are All Questions Completed?
             │                 │
            No                Yes
             │                 │
             ▼                 ▼
    Display Next Question   Show Final Result
```

---

# 🚀 Functionalities

## ❓ Dynamic Question Rendering

All quiz questions are stored inside a JavaScript array.

Whenever the current question changes, JavaScript dynamically generates the question and its four options using **Template Literals** and **innerHTML**.

This approach avoids writing static HTML for every question and makes the application scalable.

---

## ⏱️ Question Timer

Every question starts with a **60-second countdown timer**.

The timer updates every second using **setInterval()**.

If the timer reaches zero before the user submits an answer:

✔ The timer stops.

✔ The question is added to the **Time Up Questions** list.

✔ The next question automatically appears.

---

➡️ **Continue with Part 2** (Timer Logic, Previous/Next Buttons, Submit Logic, Result Screen, UI Preview, JavaScript Topics, CSS Concepts, HTML Elements...).

## ⏭️ Next Question

The **Next** button allows users to move to the next question without submitting an answer.

### Working

✔ User clicks the **Next** button.

✔ The current timer stops.

✔ The current question index increases.

✔ The next question is displayed.

✔ A fresh **60-second timer** starts for the next question.

---

## ⏮️ Previous Question

The application also allows users to return to previously visited questions.

A **Back Stack** is maintained using a JavaScript array.

### Working

✔ Every time the user moves to the next question, the current index is stored.

✔ Clicking the **Previous** button retrieves the last visited question.

✔ The timer restarts for the displayed question.

✔ The Previous button automatically becomes disabled when there are no previous questions available.

---

## ✅ Submit Answer

Users must select one option before submitting.

### Working

✔ User selects an answer.

✔ Clicks the **Submit** button.

✔ JavaScript checks whether an option has been selected.

✔ If no option is selected, an alert message is displayed.

✔ If an option is selected:

- The answer is compared with the correct answer.
- The score is updated if the answer is correct.
- The timer stops.
- The next question is displayed automatically.

---

## ⌛ Time Up Questions

Every question has an individual countdown timer.

If the timer reaches **0 seconds**:

✔ The timer stops.

✔ The current question is stored inside the **Time Up Questions** array.

✔ An alert informs the user that the time has expired.

✔ The application automatically moves to the next question.

---

## 📊 Final Result

After all questions have been completed, the application displays a complete performance summary.

The result screen includes:

- 📋 Total Questions
- ✅ Correct Answers
- ❌ Wrong Answers
- ⌛ Time Up Questions
- 🎯 Final Score
- 📈 Percentage
- 🏆 Pass / Fail Result

A user scoring **40% or above** is marked as **PASS**, otherwise **FAIL**.

---

# 🎥 Project Demo

<div align="center">

## 📹 Watch the Complete Project Demo

👉 **Click the button below to watch the project video.**

> Replace the link below with your own demo video.

<a href="YOUR_VIDEO_LINK_HERE">

<img src="https://img.shields.io/badge/▶️%20Watch%20Project%20Demo-4285F4?style=for-the-badge&logo=google-drive&logoColor=white"/>

</a>

</div>

---

# 📸 User Interface

```text
 ------------------------------------------------------------

                    📝 JavaScript Quiz

                  ⏱️ 01 : 00 Timer

 ------------------------------------------------------------

          What is JavaScript?

   ○ Programming Language

   ○ Database

   ○ Browser

   ○ Operating System

 ------------------------------------------------------------

      ◀ Previous      Submit      Next ▶

 ------------------------------------------------------------
```

---

# 🎯 JavaScript Topics Used

- Variables (`let`, `const`, `var`)
- Arrays
- Array of Objects
- DOM Manipulation
- Event Handling
- Form Handling
- Functions
- Loops
- Conditional Statements
- Template Literals
- `querySelector()`
- `querySelectorAll()`
- `innerHTML`
- `setInterval()`
- `clearInterval()`
- `push()`
- `pop()`
- Timer Logic
- Score Calculation
- Percentage Calculation

---

# 🎨 CSS Concepts Used

- Universal Selector
- Flexbox
- Background Colors
- Border Radius
- Padding & Margin
- Box Model
- Hover Effects
- Cursor Pointer
- Responsive Layout
- Overflow Hidden
- Font Styling
- Button Styling
- Border
- Transition Effects

---

# 🏗️ HTML Elements Used

- `div`
- `section`
- `article`
- `main`
- `aside`
- `form`
- `button`
- `input`
- `label`
- `span`
- `script`
- `link`
- `head`
- `body`

---

# 📋 Functions Used

| Function | Purpose |
|----------|---------|
| **getData()** | Displays the current question and starts the timer |
| **setInterval()** | Updates the countdown timer every second |
| **clearInterval()** | Stops the running timer |
| **Next Button** | Moves to the next question |
| **Previous Button** | Returns to the previous question |
| **Submit Event** | Validates the selected answer and updates the score |

---

# 🔄 Quiz Working Logic

```text
Start Quiz
      │
      ▼
Load Current Question
      │
      ▼
Display Four Options
      │
      ▼
Start Timer
      │
 ┌────┴────┐
 │         │
 ▼         ▼
Submit   Time Up
 │         │
 ▼         ▼
Check     Store
Answer   Question
 │         │
 └────┬────┘
      ▼
Update Score
      │
      ▼
Next Question
      │
      ▼
Finished?
 │         │
No        Yes
 │         │
 ▼         ▼
Repeat   Show Result
```

---

# 💡 Key Concepts Learned

- Creating dynamic quiz applications
- Working with Arrays of Objects
- DOM Manipulation
- Dynamic HTML Generation
- Timer Implementation
- Form Validation
- Score Calculation
- Percentage Calculation
- Event Handling
- Stack-based Previous Navigation
- Conditional Logic
- Building reusable JavaScript functions


---

# 📊 Project Highlights

✔ Beginner Friendly

✔ Dynamic Question Rendering

✔ Multiple Choice Questions

✔ 60 Seconds Timer

✔ Automatic Next Question on Time Up

✔ Previous Question Navigation

✔ Answer Validation

✔ Score Calculation

✔ Percentage Calculation

✔ Pass / Fail Result

✔ Time Up Question Tracking

✔ JavaScript Array of Objects

✔ DOM Manipulation Practice

✔ Event Handling

✔ Responsive User Interface

✔ Clean HTML Structure

✔ Modern CSS Design

✔ Vanilla JavaScript Project

✔ Reusable JavaScript Functions

✔ Lightweight Frontend Project

✔ No External Libraries

---

# 🎯 Why This Project?

This **JavaScript Quiz Application** is an excellent beginner-level project for understanding how real-world quiz systems work.

Instead of writing static HTML for every question, the application dynamically generates quiz content using JavaScript. This helps developers understand how to update the user interface using **DOM Manipulation**, **Arrays of Objects**, and **Template Literals**.

The project also introduces practical concepts such as **timers**, **form validation**, **score calculation**, **navigation between questions**, and **result generation**, making it a great learning project for JavaScript beginners.

---

# 🧠 What You'll Learn

After completing this project, you will understand:

- How to store quiz questions using Arrays of Objects
- How to generate HTML dynamically using JavaScript
- How to use `querySelector()` and `querySelectorAll()`
- How to manipulate the DOM using `innerHTML`
- How to implement a countdown timer using `setInterval()`
- How to stop timers using `clearInterval()`
- How to validate user input before submission
- How to calculate quiz scores and percentages
- How to build reusable JavaScript functions
- How to implement Previous and Next navigation
- How to track unanswered (Time Up) questions
- How HTML, CSS, and JavaScript work together

---

# 📸 Project Preview

```text
                 ┌──────────────────────────────────────┐
                 │                                      │
                 │          📝 QUIZ APPLICATION         │
                 │                                      │
                 │      ⏱️ 01 : 00 Countdown Timer      │
                 │                                      │
                 │     ❓ Multiple Choice Question      │
                 │                                      │
                 │        ○ Option A                   │
                 │        ○ Option B                   │
                 │        ○ Option C                   │
                 │        ○ Option D                   │
                 │                                      │
                 │  ◀ Previous   Submit   Next ▶       │
                 │                                      │
                 └──────────────────────────────────────┘
```

---

# 🌟 Future Enhancements

- 🔢 Question Number Indicator
- 📍 Progress Bar
- 💾 Save User Answers
- 🔁 Review Answers Before Submission
- 🎯 Negative Marking System
- 📊 Detailed Result Analysis
- 📈 Performance Statistics
- 📝 Random Question Order
- 🔀 Shuffle Options
- 🔊 Sound Effects
- 🎨 Dark Mode
- 🌙 Light / Dark Theme Toggle
- ⌨️ Keyboard Navigation
- 📱 Better Mobile Optimization
- 🏆 Leaderboard
- 👤 User Login System
- 🗄️ Database Integration
- ☁️ Online Score Storage

---

# 📌 Project Information

| Property | Details |
|----------|---------|
| **Project Name** | JavaScript Quiz Application |
| **Project Type** | Frontend |
| **Languages** | HTML, CSS, JavaScript |
| **Difficulty Level** | Beginner to Intermediate |
| **JavaScript Concepts** | DOM Manipulation, Arrays, Events, Timer |
| **Timer Duration** | 60 Seconds per Question |
| **Question Type** | Multiple Choice |
| **Result System** | Score, Percentage & Pass/Fail |
| **External Libraries** | None |

---

# 👨‍💻 Developer

## **Yashin Mithani**

**Frontend Developer • JavaScript Learner**

### 💻 Technologies

- HTML5
- CSS3
- JavaScript
- Git & GitHub

---

# ❤️ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Your support motivates me to build more amazing frontend projects and share them with the developer community.

---

<div align="center">

# ⭐ Thank You for Visiting My Project ⭐

### Made with ❤️ using HTML, CSS & Vanilla JavaScript

🚀 Happy Coding!

</div>
