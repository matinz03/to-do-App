import { useState } from 'react'
export default function PackingList({
    listobj,
    itemDelete,
    onPacked,
    onClearList,
}) {
    const [sortBy, setSortBy] = useState('input')
    let sortedList
    if (sortBy === 'input') sortedList = listobj.slice()
    if (sortBy === 'alphabet') {
        sortedList = listobj
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description))
    }
    if (sortBy === 'packed') {
        sortedList = listobj.slice().sort((a, b) => Number(b.packed - a.packed))
    }
    return (
        <div className="flex h-full flex-col items-center justify-center gap-16 overflow-hidden bg-stone-300 p-3 text-sm font-semibold text-stone-900 sm:text-xl">
            <ul className="flex w-[70%] flex-wrap justify-between gap-5 overflow-auto scroll-auto">
                {sortedList.map((item) => (
                    <li
                        className="inline-flex w-max gap-5 rounded-md hover:bg-stone-100"
                        key={item.id}
                    >
                        <input
                            className="accent-blue-900"
                            type="checkbox"
                            checked={item.packed}
                            onChange={() => onPacked(item.id)}
                        />
                        <span
                            style={
                                item.packed
                                    ? { textDecoration: 'line-through' }
                                    : {}
                            }
                        >
                            {item.description}
                        </span>
                        <button onClick={() => itemDelete(item.id)}>❌</button>
                    </li>
                ))}
            </ul>
            <div className="md:text-md flex items-center justify-center text-sm">
                <select
                    className="md:text-md mr-30 rounded-md bg-stone-200 p-1 text-sm hover:underline"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">sort by input </option>
                    <option value="alphabet"> sort alphabetically </option>
                    <option value="packed"> sort by status </option>
                </select>
                <button
                    className="md:text-md rounded-md bg-stone-200 p-1 text-sm hover:underline"
                    onClick={onClearList}
                >
                    clear list
                </button>
            </div>
        </div>
    )
}
