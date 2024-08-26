import AddtodoForm from "./AddtodoForm"
import TodoList from "./TodoList"
import { useState } from "react"

function TodoContainer() {

    const [activityArr, setActivity] = useState([
        {
            id: 1,
            activity: "Go for a Walk"
        },
        {
            id: 2,
            activity: "Read Book"
        },
        {
            id: 3,
            activity: "Take a shower"
        }
    ])

    return (
        <div>
            <div className="flex gap-3 flex-wrap">
                <AddtodoForm activityArr={activityArr} setActivity={setActivity}/>
                <TodoList activityArr={activityArr} setActivity={setActivity} />
            </div>
        </div>
    )
}

export default TodoContainer