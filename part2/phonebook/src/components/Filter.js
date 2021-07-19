const Filter = ({ filterTerm, handleFilter }) => {
    return (
        <div>
            <p>filter names:</p>
            <input value={filterTerm} onChange={handleFilter}></input>
        </div>
    )
}

export default Filter