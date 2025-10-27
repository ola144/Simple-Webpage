# React Array Methods Demo

This is a small React project that demonstrates the use of common JavaScript array methods (map, filter, reduce, forEach) in a real-world application context.

## The app displays a list of products and allows you to:

View all products

Filter affordable products (≤ $1000)

Calculate the total price of displayed products

Log product names to the console (via forEach)

## 🚀 Features

map → render the product list dynamically

filter → show only affordable products

reduce → calculate the total price of visible products

forEach → log each product name to the console

## 📂 Project Setup

create a new React project with vite:

npm create vite@latest
cd simple-webpage
npm install
npm run dev

## 🛠️ Technologies Used

React 18+

JavaScript (ES6+)

CSS (basic styling)

## 🎓 Learning Outcome

This project helps you understand how JavaScript array methods can be applied in practical scenarios inside a React app.

map → rendering lists

filter → conditional display

reduce → data aggregation

forEach → side effects (logging)

## 📌 Example Use

Click "Show Affordable (≤ $1000)" to filter the list.

Watch the total price update based on the displayed products.

Open the browser console to see product names logged via forEach.

## TASK 4

# Frontend-version-control-task-Oladimeji-Agbaje

**Author:** Oladimeji Agbaje  
**Project:** Vite + React simple layout (Header, Main, Footer) — used to demonstrate version control workflows.

---

## Purpose

This repository is created to demonstrate version control skills: initializing a repository, working with branches, making commits, opening pull requests, performing code reviews, merging, reverting commits, and branch renaming.

## Branch names & purpose

- `main` - primary branch
- `task4` - implements the task4 components (4 commits)
- `task4-feature-footer` - implements Footer component and styles (5 commits)
- `task4-footer` - renamed branch (was `task4-feature-footer`) to demonstrate branch rename flow

## Git commands used most frequently (examples)

- Branching and switching:

  - `git checkout -b task4`
  - `git checkout main`
  - `git branch -m old-name new-name`

- Committing:

  - `git add <files>`
  - `git commit -m "type(scope): message"`

- Pushing & pulling:

  - `git push -u origin task4`
  - `git pull origin main`

- Merging:

  - `git merge --no-ff task4`
  - or merge via GitHub PR UI

- Remote branch rename:
  - `git push origin --delete feature-footer`
  - `git push -u origin feature-bottom`

## TASK 7

# Presentation of Study / Practice of Learning Outcome

### Topic: Using Styled Components in React

## 🎯 Objective

To learn how to use **Styled Components** for creating modular and reusable styles within React applications.

## 🧠 What I Learned

- How to install and import styled-components.
- How to define reusable styled elements (e.g., `Button`, `Card`, `Container`).
- How to apply conditional (dynamic) styling using props.
- How to keep component styling scoped to individual components.

## 💻 Technologies Used

- React (Vite)
- Styled Components
- CSS-in-JS concept

## 📸 Outcome

The project demonstrates:

- A simple dashboard UI with styled components.
- Dynamic styles for primary/secondary buttons.
- Clean structure for scalable component design.
