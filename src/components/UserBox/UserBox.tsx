import React, { useEffect, useState } from 'react';
import { Button, FormControl, TextField } from '@mui/material';
import { TailSpin } from 'react-loader-spinner'
import { UserOperations } from '../Services';
export const UserBox = (createHandler:any) => {
	const [newUser, setNewUser] = useState({})
	const [isLoading, setLoading] = useState(true)

	const operations = new UserOperations()

	const handleChange = (event:any) => {
		const {name, value} = event.target
		setNewUser({...newUser, [name]:value})
	}
	const handleCreate = async () => {
		setLoading(true)
		console.log('Creating new user: ', newUser)
		await operations.createUser(newUser)
		setLoading(false)
		console.log('Create handler: ', createHandler)
		createHandler.createHandler()
	}
	useEffect(() => { setLoading(false) }, [])
	if (isLoading) {
		return (
		  <TailSpin color="red" radius={"8px"} />
		)
	  } else {
		return (
			<div>
				<FormControl  style={{"padding":"15"}}>
					<div>
						<TextField label="First Name" type='text' color='primary' name='firstName' onChange={handleChange} />&nbsp;
						<TextField label="Last Name" type='text' color='primary' name='lastName' onChange={handleChange} /><div>&nbsp;</div>
					</div>
					<TextField label="Email" type='text' color='primary' name='email' onChange={handleChange} /><div>&nbsp;</div>
					<TextField label="Phone" type='text' color='primary' name='phone' onChange={handleChange} /><div>&nbsp;</div>
					<div>
						<TextField label="Date of Birth" type='date' color='primary' name='dateOfBirth' onChange={handleChange} />&nbsp;
						<TextField label="Status" type='text' color='primary' name='status' onChange={handleChange} /><div>&nbsp;</div>
					</div>
					<TextField label="Address" type='textarea' color='primary' name='address' onChange={handleChange} /><div>&nbsp;</div>
					<div>
					<Button onClick={handleCreate}>Create New User</Button>
					</div>
				</FormControl>
			</div>
		)
	  }
}