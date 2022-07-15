import React from 'react'
import imgLogo from '../../assets/imgs/logo.png'
import './Logo.css'

const Logo = (props) => {
  return (
    <aside className='logo'>
        <a href="/">
          <img src={imgLogo} alt=""/>
        </a>
    </aside>
  )
}

export default Logo