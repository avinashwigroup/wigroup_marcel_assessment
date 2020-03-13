import React, { useState } from 'react'
import './Profile.css'
import { updateInfo } from '../state/actions/index.js'
import { connect } from 'react-redux'

function mapDispatchToProps(dispatch) {
	return {
		updateInfo: (info) => dispatch(updateInfo(info)),
	}
}

const Profile = (props) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [errors, setErrors] = useState({
		username: {
			error: false,
			message: '',
		},
		password: {
			error: false,
			message: '',
		},
	})

	const update = () => {
		clearErrors()
		if (validate()) {
			props.updateInfo([
				{
					password,
					username,
				},
			])
		}
	}

	const validate = () => {
		let errArray = {
			username: {
				error: false,
				message: '',
			},
			password: {
				error: false,
				message: '',
			},
		}
		let valid = true

		if (password.length < 3) {
			errArray.password.error = true
			errArray.password.message = 'Please provide a valid password.'
			valid = false
		}

		if (username.length < 3) {
			errArray.username.error = true
			errArray.username.message = 'Please provide a valid username.'
			valid = false
		}

		setErrors(errArray)

		return valid
	}

	const clearErrors = () => {
		setErrors({
			username: {
				error: false,
				message: '',
			},
			password: {
				error: false,
				message: '',
			},
		})
	}
	return (
		<form>
			<div className="input-group">
				<label>Username:</label>
				<input value={username} onChange={(event) => setUsername(event.target.value)}></input>
				<small className="err-msg">{errors.username.error ? errors.username.message : ''}</small>
			</div>
			<div className="input-group">
				<label>Password:</label>
				<input onChange={(event) => setPassword(event.target.value)} type="password"></input>
				<small className="err-msg">{errors.password.error ? errors.password.message : ''}</small>
			</div>
			<a className="btn-green" onClick={update}>
				Save
			</a>
		</form>
	)
}

export default connect(null, mapDispatchToProps)(Profile)
