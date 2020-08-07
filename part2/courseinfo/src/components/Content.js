import React from 'react'
import Part from './Part'

const Content = ({ course }) =>
    <div>
        {course.parts.map(part => <Part key={part.id} name={part.name} number={part.exercises} />)}
    </div>

export default Content;