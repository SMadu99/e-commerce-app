import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
        <div>Products</div>
        <input type='search' placeholder='search'/>
        <nav>
            <NavLink to='featured'>Featured</NavLink>
            <NavLink to='new'>New</NavLink>
        </nav>
        <Outlet/>
        </>

  )
}

export default Products