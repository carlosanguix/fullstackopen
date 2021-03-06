import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  
  const course = 'Half Stack application development'
  const parts = [
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

  let numOfExercises = 0;
  for (const i in parts) {
    numOfExercises += parts[i].exercises
  }

  console.log(numOfExercises);

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total exercices={numOfExercises}/>
    </div>
  )
}

export default App


// import React from 'react'

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

// export default App