import Part from './Part'

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) =>{
                console.log(part);
                return <Part part={part} key={part.key} />
            }
            )}
        </div>
    )
}

export default Content;