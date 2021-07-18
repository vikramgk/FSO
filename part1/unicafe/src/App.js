import React, { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAllFeedback] = useState(0)
  const [averageFeedback, setAverageFeedback] = useState(0)
  const [positiveFeedback, setPositiveFeedback] = useState(0)


  const handleAverage = () => {
    setAverageFeedback((good + neutral + bad) / 3)
  }

  const handleAll = () => {
    setAllFeedback(allFeedback + 1)
  }

  const handlePositive = () => {
    setPositiveFeedback(good / (good + neutral + bad))
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
      
      <Button text="good" clickHandler={handleGoodClick}/>
      <Button text="neutral" clickHandler={handleNeutralClick}/>
      <Button text="bad" clickHandler={handleBadClick}/>

      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        allFeedback={allFeedback}
        averageFeedback={averageFeedback}
        positiveFeedback={positiveFeedback}
      />
    </div>
  )
}

export default App