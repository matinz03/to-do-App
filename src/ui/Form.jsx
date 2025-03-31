import { useState } from 'react'
export default function Form({ onAddItem }) {
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(1)

    function handleSubmit(e) {
        e.preventDefault()
        if (!description) return
        const newItem = { description, quantity, packed: false, id: Date.now() }
        onAddItem(newItem)
        setDescription('')
        setQuantity(1)
    }

    return (
        <form
            className="flex items-center justify-center gap-3.5 bg-stone-200 p-4 sm:p-11"
            onSubmit={handleSubmit}
        >
            <h3 className="mr-7 text-xl text-purple-950 sm:text-4xl">
                What do you want to remember?
            </h3>
            <input
                className="w-44 rounded-2xl bg-blue-400 p-2 text-center ring-blue-300 transition-all duration-300 focus:bg-gray-200 focus:ring-2 focus:outline-none sm:focus:w-60"
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button className="hover:bg-back-500 hover:font-extrabold w-44 rounded-2xl border-none bg-gray-300 p-2 ring-indigo-600 hover:bg-indigo-950 hover:text-cyan-500 hover:ring-2 hover:outline-none">
                Add{' '}
            </button>
        </form>
    )
}
