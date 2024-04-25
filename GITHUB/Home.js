import React, { useEffect,useState } from 'react'
import style from './CSS/Home.module.css'


function Home() {
 
  const [condition,setcondition]=useState(true)
  // const play=()=>{
  //   playSound()
  // }
  
  return (
    <div  className={style.container}>
        <img className={style.git} src='https://cdn-icons-png.flaticon.com/512/25/25231.png'></img>
        <h1  className={style.text}>Welcome to Github Finder</h1>
        <h2 className={style.text}>Click up to land on The finder Page</h2>
       

    </div>
  )
}

export default Home