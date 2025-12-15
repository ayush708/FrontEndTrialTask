import { useEffect, useState } from 'react'
import { fetchTodos, deleteTodo } from '../services/api'
import TodoCard from '../components/TodoCard'
import { Link } from 'react-router-dom'


export default function TodoList() {
const [todos, setTodos] = useState([])
const [loading, setLoading] = useState(true)


useEffect(() => {
fetchTodos().then(data => {
setTodos(data)
setLoading(false)
})
}, [])


const handleDelete = (id) => {
if (window.confirm('Delete this todo?')) {
deleteTodo(id)
setTodos(todos.filter(t => t.id !== id))
}
}


if (loading) return <p className="p-4">Loading...</p>


return (
<div className="p-6">
<Link to="/todos/create" className="bg-green-600 text-white px-4 py-2 rounded">
Create Todo
</Link>


<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
{todos.map(todo => (
<TodoCard key={todo.id} todo={todo} onDelete={handleDelete} />
))}
</div>
</div>
)
}