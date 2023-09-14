import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const LinkCompo = () => {
  return (
    <div className='LinkCompo'>
      {/* <Link>Hands</Link> */}
      <Link className='linkItem' to='/login'>Login</Link>
      <Link className='linkItem' to='/register'>Register</Link>
      {/* <Link to='/loginsucessfully'></Link> */}
    </div>
  )
}

export default LinkCompo
