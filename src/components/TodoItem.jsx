function TodoItem(props){
    const activityArr = props.activityArr
    const setActivity = props.setActivity

    function handleDelete(deleteId){
        var temparr = activityArr.filter((item)=>{
            if(item.id===deleteId){
                return false
            }
            else{
                return true
            }
        })
        setActivity(temparr)
    }
    return (
        <div className="flex justify-between">
            <p>{props.index+1}.{props.item.activity}</p>
            <button className="text-red-600" onClick={()=>{handleDelete(props.id)}}>Delete</button>
        </div>
    )
}

export default TodoItem