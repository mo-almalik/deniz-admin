import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return <>
    <header>
      <h1>My Admin Panel</h1>
    </header>
    <main>
     <Outlet />
    </main>
    <footer>
      &copy; 2023 My Admin Panel
    </footer>
  </>
}

export default Layout