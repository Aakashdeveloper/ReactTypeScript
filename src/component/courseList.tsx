import Course from './course';
import {type CourseGoal} from '../App';

type CourseGoalList = {
    goals:CourseGoal[];
    onDeleteGoal: (id:number) => void;
}

function CourseList({goals,onDeleteGoal}:CourseGoalList){
 return(
    <ul>
    {goals.map((goal) => (
      <li key={goal.id}>
      <Course
          title={goal.title}
          onDelete={onDeleteGoal}
          id={goal.id}>
        <p>{goal.description}</p>
      </Course>
      </li>
    ))}
    </ul>
 )
}

export default CourseList

// import Course from './course'

// type CourseGoalList = {
//     goals:{
//         id: number;
//         title:string;
//         description: string
//       }[]
// }

// function CourseList({goals}:CourseGoalList){
//  return(
//     <ul>
//     {goals.map((goal) => (
//       <li key={goal.id}>
//       <Course
//           title={goal.title}>
//         <p>{goal.description}</p>
//       </Course>
//       </li>
//     ))}
//     </ul>
//  )
// }

// export default CourseList