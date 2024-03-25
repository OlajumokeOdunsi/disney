import  { useState } from 'react'
import Header from "../component/Header"
import Heroheader from "../component/Heroheader"
import Dropdown from "../component/Dropdown"


function Display(){
    const[isvisible, setIsvisible]=useState(false)

    const toogleVisibilty=()=>{
        setIsvisible(!isvisible)

    }


    return(
        <>
     <Header onclick={toogleVisibilty}/>
     <Dropdown isvisible={isvisible}/>
    <Heroheader/>

        </>
    )
}
export default Display