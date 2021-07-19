const PersonForm = ({ handleSubmit, newName, handleNameInput, handleNumberInput, newPhone }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newName} onChange={handleNameInput} />
                <br />
                no.: <input value={newPhone} onChange={handleNumberInput} />
            </div>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>
    )
}

export default PersonForm