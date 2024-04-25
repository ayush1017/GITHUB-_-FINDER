import React, { useEffect, useState } from 'react'
import MainBio from './MainBio'
import Navbar from './Navbar'
import Reposi from './Reposi.js'
// https://api.github.com/users/ayush1017
import style from './CSS/DisGit.module.css'
function DisGit() {
    const [username,setusername]=useState('')
    const [use,setuse]=useState('')
    const [condition,setcondition]=useState(false)
    const data= async()=>{
        const res= await fetch(`https://api.github.com/users/${username}`)
      const  response=await res.json()
      setuse(response)
      console.log(response)

    }
    const handleclick=()=>{
       data()
       if(condition === false){
        setcondition(true)

       }
       else{
        setcondition(false)
       }
       
    }
    // useEffect(()=>{
    //     data()

    // },[])
    
  return (
    <>
     
    <div className={style.container}>
     
        <h1>Welcome to Github Finder</h1>
        <input  className={style.text} type="text" value={username} onChange={(e)=>{setusername(e.target.value)}}></input>
        <button className={style.butt} onClick={handleclick}>Submit</button>

        <div className={style.inner}>
       {condition && (
        <>
        <MainBio user={use}></MainBio>
        <Reposi name={use.login}/>
        </>
        

       )}
        



    </div>

    
    </div>
    </>
    
  )
}

export default DisGit