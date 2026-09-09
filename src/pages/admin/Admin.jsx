import React from 'react'
import { NavLink, Outlet } from 'react-router'

export default function Admin() {
  return (
    <div>
      <aside>
        <Outlet />
      </aside>
      <h1>Admin</h1>

      <nav>
        <NavLink to="users">Usuarios</NavLink>
        {' | '}
        <NavLink to="products">Productos</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}
