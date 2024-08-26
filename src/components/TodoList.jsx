import TodoItem from "./TodoItem"

function TodoList(props) {
    
    const activityArr = props.activityArr
    const setActivity = props.setActivity

    return (
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityArr.length===0?<p>You haven't added anything yet.</p>:""}
            {
                activityArr.map((item, index) => {
                    return <TodoItem id={item.id} index={index} item={item} activityArr={activityArr} setActivity={setActivity} />
                })
            }
        </div>
    )
}

export default TodoList