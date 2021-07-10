import Part from './Part'

const Content = ({parts, exercises}) => {
    return (
        <div>
            <Part part={parts.part1} exercise={exercises.exercises1}/>
            <Part part={parts.part2} exercise={exercises.exercises2}/>
            <Part part={parts.part3} exercise={exercises.exercises3}/>
        </div>
    )
}

export default Content