import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router-dom"

function Landing(){

    const data = useLocation()

    return(
        <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header usrname={data.state.user}></Header>
        <div className="flex justify-between gap-7 flex-wrap py-5">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
          <Card bgcolor={"#FD6663"} title={"August"} subtitle={"13.16.24"}/>
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}/>
        </div>
        <TodoContainer/>
      </div> 
    </div>
    )
}

export default Landing