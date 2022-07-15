import React from 'react'
import './Nav.css'
import { NavList } from './NavList'

const Nav = () => {
  return (
    <aside className='menu-area'>
      <NavList icon = 'home' title = 'Inicio'/>
      <NavList icon = 'user' title = 'Usuário'/>
    </aside>
  )
}

export default Nav