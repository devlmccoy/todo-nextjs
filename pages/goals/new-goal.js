import styles from '/styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Select from 'react-select';

export default function NewGoal() {
	const [clicked, setClicked] = useState(false);
	const [classname, setClassName] = useState('select');

	const goalOptions = [
		{ value: 'household', label: 'household' },
		{ value: 'workout', label: 'workout' },
		{ value: 'grocery', label: 'grocery' },
	];

	const handleClick = (e) => {
		// e.target.innerText === 'Yes' ? e.target.className = "s"
		// e.preventDefault();
		// e.target.className = styles.selected;
		console.log(e.target.innerText);
	};

	return (
		<div className={styles.body}>
			<h1>What kind of Goal is this?</h1>
			<Select options={goalOptions} />
			<h1>Goal</h1>
			<input type='text'></input>
			<h1>Goal Date</h1>
			<input type='text'></input>
			<div className={styles.home}>
				<Link href='/'>
					<a>Home</a>
				</Link>
			</div>
		</div>
	);
}
