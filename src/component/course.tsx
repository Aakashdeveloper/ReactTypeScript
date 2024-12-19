import {type FC, PropsWithChildren, type ReactNode} from 'react'

type CourseProps = PropsWithChildren<
    {   
        id:number;
        title: string; 
        onDelete: (id:number) => void;
    }
>;

const Course: FC<CourseProps> = ({title,id,children,onDelete}) => {

    return(
        <article>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
        
    )

}

export default Course;

// import {PropsWithChildren, type ReactNode} from 'react'

// interface CourseProps{
//     title:string;
//     children: ReactNode
// }
// //type CourseProps = PropsWithChildren<{title: string}>
// function Course({
//     title,
//     children
 
//     }:CourseProps){
//     return(
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{children}</p>
//             </div>
//             <button>Delete</button>
//         </article>
        
//     )

// }

// export default Course;

// interface CourseProps{
//     title:string;
//     description: string
// }
// function Course({
//     title,
//     description
//     }:CourseProps){
//     return(
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{description}</p>
//             </div>
//             <button>Delete</button>
//         </article>
        
//     )

// }

// export default Course;


// function Course({title,description}:{
//     title:string;
//     description: string
// }){
//     return(
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{description}</p>
               

//             </div>
//             <button>Delete</button>
//         </article>
        
//     )

// }

// export default Course;



// export default function Course(props:{
//     title:string;
//     description: string
// }){
//     return(
//         <article>
//             <div>
//                 <h2>Title</h2>
//                 <p>Description</p>

//             </div>
//             <button>Delete</button>
//         </article>
        
//     )

// }