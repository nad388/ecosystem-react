import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { GrClose } from 'react-icons/gr'
import { ImHome } from 'react-icons/im'
import Modal from 'react-modal'
import Form from './Form'

function App() {
	const [modalIsOpen, setIsOpen] = useState(false)

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			backgroundColor: 'gray',
		},
	}

	const closeModal = () => {
		setIsOpen(false)
	}

	return (
		<>
			<Helmet>
				<title>Home</title>
			</Helmet>
			<div>
				<a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
					<ImHome size={120} color='white' />
				</a>
			</div>
			<h1>Home Page</h1>
			<div className='card'>
				<button onClick={() => setIsOpen(true)}>Open modal</button>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel='Example Modal'
				>
					<h2>Hello</h2>
					<button onClick={closeModal}>
						<GrClose />
					</button>

					<div>I am a modal</div>
					<Form />
				</Modal>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
