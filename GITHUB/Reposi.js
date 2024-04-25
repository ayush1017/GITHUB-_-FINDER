import React, { useEffect, useState } from 'react'
import style from './CSS/Repo.module.css'
function Reposi({name}) {
    const [rep,setrep]=useState([])
    const total=rep.length
    const perbut=total/5
    const repodata=async()=>{
        const data=await fetch(`https://api.github.com/users/${name}/repos`)
        const response=await data.json()
        setrep(response)
        console.log(response)
    }
    const buttt=()=>{
        for(let i=0;i<=perbut;i++){
            console.log(i)
        }
    }
    useEffect(()=>{
        repodata()
        buttt()

    },[])
  return (
    <div >
        <h1>Repositries</h1><br></br>

        <div className={style.containerm}>
        <ul>
            {rep.map((item,index)=>
            <>
             <li key={index} >
                <a className={style.card} href={item.html_url}>{item.html_url}</a><br></br><br></br><br></br><br></br><br></br>
            </li>

              
            </>
           )}
        </ul>


        </div>
        
       
      
    </div>
  )
}

export default Reposi