import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button feedback={good} setFeedbackState={setGood} text='good' />
        <Button feedback={neutral} setFeedbackState={setNeutral} text='neutral' />
        <Button feedback={bad} setFeedbackState={setBad} text='bad' />
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = ({ feedback, setFeedbackState, text }) =>
  <button onClick={() => setFeedbackState(feedback + 1)}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positivePercentage = ((good / total) * 100).toString() + " %";
  const anyFeedback = good !== 0 || neutral !== 0 || bad !== 0;

  if (anyFeedback) {
    return (<table>
      <tbody>
        <Statistic statistic={good} text='good' />
        <Statistic statistic={neutral} text='neutral' />
        <Statistic statistic={bad} text='bad' />
        <Statistic statistic={total} text='all' />
        <Statistic statistic={average} text='average' />
        <Statistic statistic={positivePercentage} text='positive' />
      </tbody>
    </table>);
  } else {
    return (<div>No feedback given</div>);
  }
}

const Statistic = ({ statistic, text }) =>
  <tr>
    <td>{text}</td>
    <td>{statistic}</td>
  </tr>

ReactDOM.render(<App />,
  document.getElementById('root')
)