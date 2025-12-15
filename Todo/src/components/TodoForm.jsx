import { useState } from 'react'


export default function TodoForm({ initialData, onSubmit }) {
const [title, setTitle] = useState(initialData?.title || '')
const [description, setDescription] = useState(initialData?.description || '')
const [status, setStatus] = useState(initialData?.status || 'pending')
const [image, setImage] = useState(initialData?.image || '')


const handleImage = (e) => {
const file = e.target.files[0]
if (!file) return


const reader = new FileReader()
reader.onloadend = () => setImage(reader.result)
reader.readAsDataURL(file)
}


const handleSubmit = (e) => {
e.preventDefault()
onSubmit({ title, description, status, image })
}


return (
<form onSubmit={handleSubmit} className="space-y-4 max-w-md">
<input
className="border p-2 w-full"
placeholder="Title"
required
value={title}
onChange={e => setTitle(e.target.value)}
/>


<textarea
className="border p-2 w-full"
placeholder="Description"
value={description}
onChange={e => setDescription(e.target.value)}
/>


<select
className="border p-2 w-full"
value={status}
onChange={e => setStatus(e.target.value)}
>
<option value="pending">Pending</option>
<option value="completed">Completed</option>
</select>


<input type="file" accept="image/*" onChange={handleImage} />


{image && <img src={image} className="w-24 h-24 object-cover" />}


<button className="bg-blue-600 text-white px-4 py-2 rounded">
Save Todo
</button>
</form>
)
}