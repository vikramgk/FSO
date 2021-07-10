import Part from './Part'

const Content = ({parts}) => {
    return (
        <div>
            <Part part={parts.part1.name} exercise={parts.part1.exercises}/>
            <Part part={parts.part2.name} exercise={parts.part2.exercises}/>
            <Part part={parts.part3.name} exercise={parts.part3.exercises}/>
        </div>
    )
}

export default Content