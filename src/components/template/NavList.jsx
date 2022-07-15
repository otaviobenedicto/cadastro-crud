import React from 'react'
import './Nav.css'

export const NavList = ({icon,title}) => {
  return (
    <nav className="menu">
        <a href={`/${icon}`}>
          <i className={`fa fa-${icon}`}></i>{title}
        </a>
      </nav> 
  )
}
