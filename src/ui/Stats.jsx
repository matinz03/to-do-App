export default function Stats({ list }) {
    const className = 'text-base sm:text-2xl bg-cyan-500 mt-0 pt-0 text-center'
    if (!list.length) {
        return (
            <p className={className}>
                <em>Start adding some To-DO items to your list </em>
            </p>
        )
    }
    const nItems = list?.length
    const npacked = list?.reduce((acc, cur) => acc + (cur.packed ? 1 : 0), 0)
    const Y = (npacked / nItems).toFixed(2) * 100
    return (
        <footer className={className}>
            {Y !== 100 ? (
                <em>
                    ✎🗒 You have {nItems} To-Do items on your list, and have
                    already done {Y}% percent of your tasks{' '}
                </em>
            ) : (
                <em>You remembered to do everything!</em>
            )}
        </footer>
    )
}
