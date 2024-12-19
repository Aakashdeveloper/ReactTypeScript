
import {useState} from 'react';

import Header from './component/Header';
import Image from './assets/goals.jpg';
import CourseList from './component/courseList';

export type CourseGoal = {
  id: number;
  title:string;
  description: string
}
function App() {

const [goals, setGoals] = useState<CourseGoal[]>([])

  function handleAddGoal(){
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id:Math.random()*1000,
        title:"Learn React TS",
        description:"This is react corurse"
      }
      return [...prevGoals,newGoal ]
    })
  }

  function handleDeleteGoal(id:number){
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id ))
  }

  return (
    <>
        <Header image={{src:Image, alt:'List of goals'}}>
          <h1>Your Course Goals</h1>
        </Header>
        <button onClick={handleAddGoal}>Add Goal</button>
        <CourseList goals={goals} onDeleteGoal={handleDeleteGoal}/>
       
        
        
    </>
  )
}

export default App

// import {useState} from 'react';

// import Header from './component/Header';
// import Image from './assets/goals.jpg';
// import CourseList from './component/courseList';

// type CourseGoal = {
//   id: number;
//   title:string;
//   description: string
// }
// function App() {

// const [goals, setGoals] = useState<CourseGoal[]>([])

//   function handleAddGoal(){
//     setGoals((prevGoals) => {
//       const newGoal: CourseGoal = {
//         id:1,
//         title:"Learn React TS",
//         description:"This is react corurse"
//       }
//       return [...prevGoals,newGoal ]
//     })
//   }

//   return (
//     <>
//         <Header image={{src:Image, alt:'List of goals'}}>
//           <h1>Your Course Goals</h1>
//         </Header>
//         <button onClick={handleAddGoal}>Add Goal</button>
//         <CourseList goals={goals}/>
       
        
        
//     </>
//   )
// }

// export default App

// import {useState} from 'react';
// import Course from './component/course'
// import Header from './component/Header';
// import Image from './assets/goals.jpg'

// type CourseGoal = {
//   id: number;
//   title:string;
//   description: string
// }
// function App() {

// const [goals, setGoals] = useState<CourseGoal[]>([])

//   function handleAddGoal(){
//     setGoals((prevGoals) => {
//       const newGoal: CourseGoal = {
//         id:1,
//         title:"Learn React TS",
//         description:"This is react corurse"
//       }
//       return [...prevGoals,newGoal ]
//     })
//   }

//   return (
//     <>
//         <Header image={{src:Image, alt:'List of goals'}}>
//           <h1>Your Course Goals</h1>
//         </Header>
//         <button onClick={handleAddGoal}>Add Goal</button>
//         <ul>
//         {goals.map((goal) => (
//           <li key={goal.id}>
//           <Course
//               title={goal.title}>
//             <p>{goal.description}</p>
//           </Course>
//           </li>
//         ))}
//         </ul>
        
        
//     </>
//   )
// }

// export default App

// import Course from './component/course'
// import Header from './component/Header';
// import Image from './assets/goals.jpg'
// function App() {

//   return (
//     <>
//         <Header image={{src:Image, alt:'List of goals'}}>
//           <h1>Your Course Goals</h1>
//         </Header>
//         <Course
//         title="Learn React +TS">
//           <p>Learn it from aakash</p>
//         </Course>
        
//     </>
//   )
// }

// export default App



// import Course from './component/course'
// function App() {

//   return (
//     <>
    
//         <Course
//         title="Learn React +TS"
//         description={"Learn it from aakash"}
//         id="1">
          
//         </Course>
        
//     </>
//   )
// }

// export default App
