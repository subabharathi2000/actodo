import { useState } from "react"

function AddtodoForm(props) {
    const activityArr = props.activityArr
    const setActivity = props.setActivity

    const [newActivity, setNewActivity] = useState("")

    function handleChange(event){
        setNewActivity(event.target.value)
    }
    function handleAdd(){
        setActivity([...activityArr,{id:activityArr.length+1, activity:newActivity}])
        setNewActivity("")
    }

    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-medium">Manage Activity</h1>
            <div>
                <input type="text" value={newActivity} onChange={handleChange} className="border border-black rounded p-1" placeholder="Next Activity.?" />
                <button className="bg-black text-white border border-black rounded-r-sm p-1 " onClick={handleAdd}>Add</button>
            </div>
        </div>
    )
}
export default AddtodoForm