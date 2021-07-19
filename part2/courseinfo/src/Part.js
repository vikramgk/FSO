const Part = ({part, key}) => {
    return (
      <p key={key}>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
export default Part