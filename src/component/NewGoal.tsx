import {useRef, type FormEvent } from "react"

type NewGoalProps = {
    onAddGoal:(goal:string, summary:string) => void
}

function NewGoal({onAddGoal}:NewGoalProps){
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);


    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset();

        onAddGoal(enteredGoal,enteredSummary)
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input id="goal" type="text" ref={goal}/>
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input id="summary" type="text" ref={summary}/>
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}
export default NewGoal

// import {useRef, type FormEvent } from "react"

// function NewGoal(){
//     const goal = useRef<HTMLInputElement>(null);
//     const summary = useRef<HTMLInputElement>(null);


//     function handleSubmit(event: FormEvent<HTMLFormElement>){
//         event.preventDefault();

//         const enteredGoal = goal.current!.value;
//         const enteredSummary = summary.current!.value;


//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <p>
//                 <label htmlFor="goal">Your Goal</label>
//                 <input id="goal" type="text" ref={goal}/>
//             </p>
//             <p>
//                 <label htmlFor="summary">Short Summary</label>
//                 <input id="summary" type="text" ref={summary}/>
//             </p>
//             <p>
//                 <button>Add Goal</button>
//             </p>
//         </form>
//     )
// }
// export default NewGoal

// import {type FormEvent } from "react"

// function NewGoal(){

//     function handleSubmit(event: FormEvent){
//         event.preventDefault();

//         new FormData(event.currentTarget)
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <p>
//                 <label htmlFor="goal">Your Goal</label>
//                 <input id="goal" type="text" name="goal"/>
//             </p>
//             <p>
//                 <label htmlFor="summary">Short Summary</label>
//                 <input id="summary" type="text" name="summary"/>
//             </p>
//             <p>
//                 <button>Add Goal</button>
//             </p>
//         </form>
//     )
// }
// export default NewGoal

// import {type FormEvent } from "react"

// function NewGoal(){

//     function handleSubmit(event: FormEvent<HTMLFormElement>){
//         event.preventDefault();

//         new FormData(event.currentTarget)
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <p>
//                 <label htmlFor="goal">Your Goal</label>
//                 <input id="goal" type="text" name="goal"/>
//             </p>
//             <p>
//                 <label htmlFor="summary">Short Summary</label>
//                 <input id="summary" type="text" name="summary"/>
//             </p>
//             <p>
//                 <button>Add Goal</button>
//             </p>
//         </form>
//     )
// }
// export default NewGoal

// import {type FormEvent } from "react"

// function NewGoal(){

//     function handleSubmit(event: FormEvent){
//         event.preventDefault();

//         new FormData(event.currentTarget)
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <p>
//                 <label htmlFor="goal">Your Goal</label>
//                 <input id="goal" type="text" name="goal"/>
//             </p>
//             <p>
//                 <label htmlFor="summary">Short Summary</label>
//                 <input id="summary" type="text" name="summary"/>
//             </p>
//             <p>
//                 <button>Add Goal</button>
//             </p>
//         </form>
//     )
// }
// export default NewGoal