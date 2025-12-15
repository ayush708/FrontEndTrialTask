import TodoForm from '../components/TodoForm'
import { createTodo } from '../services/api'
import { useNavigate } from 'react-router-dom'


export default function CreateTodo() {
const navigate = useNavigate()


const handleSubmit = (data) => {
createTodo({ id: Date.now(), ...data })
navigate('/todos')
}


return (
<div className="p-6">
<h2 className="text-xl font-bold mb-4">Create Todo</h2>
<TodoForm onSubmit={handleSubmit} />
</div>
)
}