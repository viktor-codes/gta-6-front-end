import styles from './Home.module.css'

const isSuccess = true

function Home() {
	return (
		<div className={styles.wrapper}>
			{isSuccess ? (
				<div className={styles.success}>
					<h1>The Form Sent!</h1>
				</div>
			) : (
				<form action=''>
					<h1>GTA 6 - Leave your application</h1>
					<input type='name' placeholder='Enter name:' />
					<input type='email' placeholder='Enter email:' />
					<button>Order</button>
				</form>
			)}
		</div>
	)
}

export default Home
