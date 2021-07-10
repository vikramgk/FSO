const Total = ({parts}) => {
    console.log(parts);
    return (
        <div>
            <p>Number of exercises {parts.map(part => part.exercises).reduce((total, number) => total + number)}</p>
        </div>
    )
}

export default Total