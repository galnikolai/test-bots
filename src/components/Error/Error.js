import React from 'react'
import './Error.css'

const Error = ({ fetchBots }) => {
	return (
		<div className="error">
			<img alt="error" src="/images/error.png"></img>
			<h2>Loading error</h2>
			<p>Something went wrong, try again later</p>
			<span onClick={fetchBots}>RELOAD</span>
		</div>
	)
}

export default Error
