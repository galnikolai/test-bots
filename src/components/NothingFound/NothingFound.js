import React from 'react'
import './NothingFound.css'

const NothingFound = ({ showBotsTable, dataLength }) => {
	return (
		<div className="nothing-found">
			<img alt="error" src="/images/nothingFound.svg"></img>
			<h2>Nothing found</h2>
			<p>Currently available {dataLength} bots</p>
			<span onClick={showBotsTable}>SHOW ALL</span>
		</div>
	)
}

export default NothingFound
