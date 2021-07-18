import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAllFeedback] = useState(0)
  const [averageFeedback, setAverageFeedback] = useState(0)
  const [positiveFeedback, setPositiveFeedback] = useState(0)

  const handleAverage = () => {
    setAverageFeedback((good + neutral + bad)/3)
  }

  const handleAll = () => {
    setAllFeedback(allFeedback + 1)
  }

  const handlePositive = () => {
    setPositiveFeedback(good /( good + neutral + bad ))
  }

  const handleGoodClick = () => {
    setGood(good + 1)
    handleAll()
    handleAverage()
    handlePositive()
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    handleAll()
    handleAverage()
    handlePositive()
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    handleAll()
    handleAverage()
    handlePositive()
  }

  return (
    <div>

      <h1>give feedback</h1>

      <button onClick={handleGoodClick}>
        good
      </button>
      <button onClick={handleNeutralClick}>
        neutral
      </button>
      <button onClick={handleBadClick}>
        bad
      </button>
      
      <h1>statistics</h1>

      <p>
        good {good}
      </p>
      <p>
        neutral {neutral}
      </p>
      <p>
        bad {bad}
      </p>
      <p>
        all {allFeedback}
      </p>
      <p>
        average {averageFeedback}
      </p>
      <p>
        positive {positiveFeedback}
      </p>

    </div>
  )
}

export default App