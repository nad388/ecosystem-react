import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div>
			<header>
				<nav>
					<Link style={{ marginRight: '7px' }} to='/'>
						Home
					</Link>

					<Link to='/profile'>Profile</Link>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
