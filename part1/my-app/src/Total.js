const Total = ({course}) => {
    console.log(course.parts);
    return (
        <div>
            <p>Number of exercises {course.parts.map(part => part.exercises).reduce((total, number) => total + number)}</p>
        </div>
    )
}

export default Total