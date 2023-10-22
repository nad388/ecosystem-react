import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Helmet } from 'react-helmet'
import { ImUser } from 'react-icons/im'
import Select from 'react-select'

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
]

function Profile() {
	const [startDate, setStartDate] = useState(new Date())
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () =>
			fetch('https://jsonplaceholder.typicode.com/todos/1').then(response =>
				response.json()
			),
	})
	return (
		<>
			<Helmet>
				<title>Profile</title>
			</Helmet>
			<div>
				<a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
					<ImUser size={120} color='white' />
				</a>
			</div>
			<h1>Profile</h1>
			<p>{isLoading ? 'Loading...' : `${data?.id} - ${data?.title}`}</p>
			<Select options={options} />
			<br />
			<DatePicker
				showIcon
				selected={startDate}
				onChange={date => setStartDate(date)}
			/>
		</>
	)
}

export default Profile
