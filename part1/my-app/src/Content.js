const Content = ({parts, exercises}) => {
    return (
        <div>
            <p>
                {parts.part1} {exercises.exercises1}
            </p>
            <p>
                {parts.part2} {exercises.exercises2}
            </p>
            <p>
                {parts.part3} {exercises.exercises3}
            </p>
        </div>
    )
}

export default Content