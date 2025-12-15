# FrontEndTrialTask
To-do-list

This project is a simple Todo application built using React and Vite.
It allows users to create, view, update, delete, and manage the status of todos (Pending /Completed).
All data is stored in the browser using localStorage, so no backend setup is required.


## Setup

Run the app locally:

```bash
cd c:\Users\LEGION\OneDrive\Desktop\Intern\FrontEndTrialTask\Todo
npm install
npm run dev
```

Open the URL shown in the terminal (typically http://localhost:5173).

# Features

-Create new todos with title, description, status, and image.
-View a list of all todos with status badges and image previews.
-Edit existing todos (including replacing the image).
-Delete todos with confirmation.
-Mark todos as Pending or Completed.
-Data persists using browser localStorage

# Tech Stack

-React (functional components and hooks)
-Vite for fast development and build
-React Router for page navigation
-Tailwind CSS for styling

# Application Routes

/todos
Displays all todos with edit and delete options, along with a button to create a new todo.

/todos/create
Form to add a new todo. Title is required, while description and image are optional.
Redirects back to the todo list after submission.

/todos/:id/edit
Edit page with pre-filled todo data. Allows updating text, status, and image.

# Data Handling

-All todo data is managed using localStorage.
-CRUD operations are handled in src/services/api.js.
-Uploaded images are converted to base64 strings using the FileReader API and stored along with the todo data.

