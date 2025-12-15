const STORAGE_KEY = 'todos'


const getTodos = () => {
return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
}


const saveTodos = (todos) => {
localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}


export const fetchTodos = () => {
return new Promise((resolve) => {
setTimeout(() => resolve(getTodos()), 500)
})
}


export const createTodo = (todo) => {
const todos = getTodos()
todos.push(todo)
saveTodos(todos)
}


export const updateTodo = (updated) => {
const todos = getTodos().map(t => t.id === updated.id ? updated : t)
saveTodos(todos)
}


export const deleteTodo = (id) => {
const todos = getTodos().filter(t => t.id !== id)
saveTodos(todos)
}


export const getTodoById = (id) => {
return getTodos().find(t => t.id === id)
}