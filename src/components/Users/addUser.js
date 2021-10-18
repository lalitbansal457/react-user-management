import {useState} from "react";

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from "./AddUser.module.css";

const AddUser = props => {

	const [enteredUsername, setEnteredUsername] = useState("")
	const [enteredAge, setEnteredAge] = useState("")

	const addUserHandler = (event) => {
		event.preventDefault();
		if(!enteredUsername.trim().length || !enteredAge.trim().length) {
			return;
		}
		console.log(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	}

	const usernameHandler = (event) => {
		setEnteredUsername(event.target.value);
	}

	const ageHandler = (event) => {
		setEnteredAge(event.target.value);
	}

	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" value={enteredUsername} onChange={usernameHandler} / >

				<label htmlFor="username">Age (Years)</label>
				<input type="number" id="age" value={enteredAge} onChange={ageHandler} / >	

				<Button type="submit">Add User</Button>
			</form>
		</Card>
	)
}

export default AddUser;