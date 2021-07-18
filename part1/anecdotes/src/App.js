import React, { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
]

const App = () => {

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * 7));
  }

  const handleVote = () => {
    let newVotes = [...votes]
    newVotes[selected] = newVotes[selected] + 1
    setVotes(newVotes);
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <p> - {votes[selected]} votes - </p>
      <br />
      <button onClick={handleClick}>new anecdote</button>
      <button onClick={handleVote}>vote</button>
      <h1>Most Popular Anecdote of All-Time</h1>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
    </div>
  )
}

export default App