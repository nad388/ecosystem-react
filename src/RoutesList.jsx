import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './components/screens/home/App'
import Profile from './components/screens/profile/Profile'
import Layout from './components/ui/Layout'

const RoutesList = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<App />} />
				<Route path='/profile' element={<Profile />} />
			</Route>
		</Routes>
	)
}

export default RoutesList
