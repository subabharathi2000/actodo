import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {

    const users = props.users
    const setusers = props.setusers
    const navigate = useNavigate()

    const [eusername,setEusername] = useState()
    const [epassword, setEpassword] = useState()

    function handleUInput(evnt){
        setEusername(evnt.target.value)
    }
    function handlePInput(evnt){
        setEpassword(evnt.target.value)
    }

    function addUser(){
        setusers([...users,{username:eusername, password:epassword}])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] border rounded-md p-10" >
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>You can Signup here :)</p>
                <div className="flex flex-col gap-2">
                    <input type="text" onChange={handleUInput} value={eusername}
                        className="w-52 bg-transparent border border-black rounded-md p-1" placeholder="username" />
                    <input type="text" onChange={handlePInput} value = {epassword}
                        className="w-52 bg-transparent border border-black rounded-md p-1" placeholder="password" />
                    <input type="text"
                        className="w-52 bg-transparent border border-black rounded-md p-1" placeholder="confirm password" />
                    <button className="w-24 p-1 rounded-md bg-yellow-500" onClick={addUser}>Sign Up</button>
                    <p>Already have an Account? <Link to={'/'} className="underline">Login</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Signup