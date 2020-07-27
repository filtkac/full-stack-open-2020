import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <h1>{props.course.name}</h1>
)

const Total = (props) => (
  <p>Number of exercises {props.course.parts.map(part => part.exercises).reduce((a, b) => a + b)}</p>
)

const Content = (props) => (
  <div>
    {props.course.parts.map(part => <Part key={part.name} name={part.name} number={part.exercises} />)}
  </div>
)

const Part = (props) => (
  <p>{props.name} {props.number}</p>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))