import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <ul>
       <li>  <Link to='/'>Home</Link> <br/> </li>
         <li>  <Link to='/about'>About</Link> </li>
               </ul> 
    </div>
  )
}

export default Navigation