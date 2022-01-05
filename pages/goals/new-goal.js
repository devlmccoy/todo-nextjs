import styles from '/styles/Home.module.css';
import Link from 'next/link';

export default function NewGoal() {
	return (
		<div className={styles.body}>
			<h1>Is this a: Household chore?</h1>
			<div className={styles.answerBox}>
				<div className={styles.select}>Yes</div>
				<div className={styles.select}>No</div>
			</div>
			<div className={styles.home}>
				<Link href='/'>
					<a>Home</a>
				</Link>
			</div>
		</div>
	);
}
