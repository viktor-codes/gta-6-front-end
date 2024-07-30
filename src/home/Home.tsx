import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Home.module.css'

const isSuccess = false

interface IFormState {
	name: string
	email: string
}

function Home() {
	const { register, handleSubmit } = useForm<IFormState>()

	const onSubmit: SubmitHandler<IFormState> = data => {
		console.log(data)
	}
	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{isSuccess ? (
					<div className={styles.success}>The Form Sent!</div>
				) : (
					<>
						<h1>GTA 6 - Leave your application</h1>
						<input
							type='name'
							placeholder='Enter name:'
							{...register('name')}
						/>
						<input
							type='email'
							placeholder='Enter email:'
							{...register('email')}
						/>
						<button>Order</button>
					</>
				)}
			</form>
		</div>
	)
}

export default Home
