import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props){

    const [eusername,setEusername] = useState()
    const [epassword, setEpassword] = useState()
    const [ruser,setRuser] = useState(true)
    const navigate = useNavigate()

    const users = props.users
    const setusers = props.setusers

    function handleUInput(evnt){
        setEusername(evnt.target.value)
    }
    function handlePInput(evnt){
        setEpassword(evnt.target.value)
    }

    function checkUser(){

        var userfound = false
        users.forEach((item)=>{
            if(item.username === eusername && item.password === epassword){
                console.log("Login Successful :)")
                userfound = true
                navigate("/landing", {state:{user:eusername}})
            }
        })
        if(userfound==false){
            console.log("Failed")
            setRuser(false)
        }
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] border rounded-md p-10" >
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser?<p>I help you manage your Activity :)</p>:<p className="text-red-600">Please signup before Login!!</p>}
                <div className="flex flex-col gap-2">
                    <input type="text" value={eusername} onChange={handleUInput}
                        className="w-52 bg-transparent border border-black rounded-md p-1" placeholder="username" />
                    <input type="text" value={epassword} onChange={handlePInput}
                        className="w-52 bg-transparent border border-black rounded-md p-1" placeholder="password" />
                    <button className="w-24 p-1 rounded-md bg-violet-500" onClick={checkUser}>Login</button>
                    <p>Don't have an Account? <Link to={'/signup'} className="underline">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Login