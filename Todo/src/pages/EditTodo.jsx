import { useParams, useNavigate } from 'react-router-dom'
import { getTodoById, updateTodo } from '../services/api'
import TodoForm from '../components/TodoForm'


export default function EditTodo() {
const { id } = useParams()
const navigate = useNavigate()
const todo = getTodoById(Number(id))


const handleSubmit = (data) => {
updateTodo({ ...todo, ...data })
navigate('/todos')
}


if (!todo) return <p>Todo not found</p>


return (
<div className="p-6">
<h2 className="text-xl font-bold mb-4">Edit Todo</h2>
<TodoForm initialData={todo} onSubmit={handleSubmit} />
</div>
)
}