import styles from './Home.module.css'

function Home() {
	return (
		<div className={styles.wrapper}>
			<form action=''>
				<h1>GTA 6 - Leave your application</h1>
				<input type='name' placeholder='Enter name' />
				<input type='email' placeholder='Enter email' />
				<button>Order</button>
			</form>
		</div>
	)
}

export default Home
