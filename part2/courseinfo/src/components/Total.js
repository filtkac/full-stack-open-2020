import React from 'react'

const Total = ({ course }) => {
    const sum = course.parts.map(part => part.exercises).reduce((a, b) => a + b);
    return (
        <b>Number of exercises {sum}</b>
    )
}

export default Total