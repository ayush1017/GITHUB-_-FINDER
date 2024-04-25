import React from 'react'

import style from './CSS/MainBio.module.css'
function MainBio({user}) {
  return (
    <div className={style.container}>
          <h3>Profile:</h3>  <img className={style.img1}src={user.avatar_url} alt="Kuch nahi hai"></img>  
         <h3>Username:<p>{user.login}</p></h3>
        <h3>name:<p>{user.name}</p></h3>
        <h3>Followers:<p>{user.followers}</p></h3>
        <h3>Created At:<p>{user.created_at}</p></h3>
        <h3>Bio:<p>{user.bio}</p></h3>
        <h3>Number_Of_Repos:<p>{user.public_repos}</p></h3>
      
      
 </div>
  )
}

export default MainBio