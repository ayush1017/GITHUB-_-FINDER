import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import DisGit from './DisGit'
import Nav from './CSS/Navbar.module.css'
function Navbar() {
const [condition,setcondition]=useState(true)
  return (
    <div className={Nav.container}>
     {condition && (
         <Link to={'/Disgit'}>DisGIt</Link>
     ) }  
        <Link to={'/'}>Home</Link>

    </div>
  )
}

export default Navbar