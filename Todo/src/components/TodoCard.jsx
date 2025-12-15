import { Link } from 'react-router-dom'


export default function TodoCard({ todo, onDelete }) {
return (
<div className="border p-4 rounded shadow">
{todo.image && <img src={todo.image} className="h-32 w-full object-cover" />}
<h3 className="font-bold mt-2">{todo.title}</h3>
<span className={`text-sm ${todo.status === 'completed' ? 'text-green-600' : 'text-yellow-600'}`}>
{todo.status}
</span>
<div className="flex gap-2 mt-2">
<Link to={`/todos/${todo.id}/edit`} className="text-blue-600">Edit</Link>
<button onClick={() => onDelete(todo.id)} className="text-red-600">Delete</button>
</div>
</div>
)
}