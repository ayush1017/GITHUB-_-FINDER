import React,{useEffect} from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import DisGit from './DisGit'
import Navbar from './Navbar'
import Home from './Home'
import styles from './CSS/Gitmain.module.css'
import chamak from './y2mate.com - Cheri Cheri Lady Instrumental.mp3'
import { useSound } from 'use-sound'
function GitMain() {
  const [playSound]=useSound(chamak)

  useEffect(()=>{playSound()},[playSound])
  return (
    <div className={styles.M}>
      
     <BrowserRouter>
     <Navbar/>
    <Routes>
    <Route path="/Disgit" element={<DisGit/>}></Route>
     <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
  }

export default GitMain