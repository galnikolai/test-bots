import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import './Table.css'
import Error from '../Error'
import NothingFound from '../NothingFound'
import PlaceHolder from '../PlaceHolder'

const Table = ({ bots, fetchBots, loading, error }) => {
	const [filteredArray, setFilteredArray] = useState([])
	const [inputValue, setInputValue] = useState('')

	const inputRef = useRef()

	useEffect(() => {
		fetchBots()
	}, [])

	useEffect(() => {
		bots.length !== 0 && !error && setFilteredArray(bots)
	}, [bots, error])

	const timestampToDate = timestamp => {
		const date = new Date()
		date.setTime(timestamp)
		return (
			('0' + date.getDate()).slice(-2) +
			'.' +
			('0' + (date.getMonth() + 1)).slice(-2) +
			'.' +
			date.getFullYear()
		)
	}

	const filterArray = event => {
		setInputValue(event.target.value)
		const array = bots.filter(bot =>
			bot.name.toLowerCase().includes(event.target.value.toLowerCase())
		)
		setFilteredArray(array)
	}

	const showBotsTable = () => {
		inputRef.current.focus()
		setFilteredArray(bots)
		setInputValue('')
	}

	const tableComponent =
		filteredArray.length !== 0 &&
		filteredArray.map(({ id, name, reg, level, link }) => {
			return (
				<tr key={name} onClick={() => window.open(link)}>
					<td>{id}</td>
					<td>{name}</td>
					<td>{timestampToDate(reg)}</td>
					<td>{level}</td>
				</tr>
			)
		})

	const areProblems = () => {
		if (error) {
			return <Error fetchBots={fetchBots} />
		} else if (filteredArray.length === 0 && !loading) {
			return (
				<NothingFound
					showBotsTable={showBotsTable}
					dataLength={bots.length}
				/>
			)
		} else {
			return null
		}
	}

	return (
		<div className="table">
			<img className="cross" alt="cross" src="/images/cross.svg"></img>
			<header>
				<h1>List of bots</h1>
				<input
					ref={inputRef}
					disabled={error}
					name="search"
					type="text"
					onChange={event => filterArray(event)}
					placeholder="Searching for a bot..."
					value={inputValue}
				/>
				<img
					style={{ display: inputValue.length === 0 && 'none' }}
					alt="cross"
					src="/images/cross.svg"
					onClick={showBotsTable}
				></img>
			</header>
			<main>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Nickname</th>
							<th>Registration</th>
							<th>Level</th>
						</tr>
					</thead>
					<tbody>{loading ? <PlaceHolder /> : tableComponent}</tbody>
				</table>
				{areProblems()}
			</main>
			<div className="footer-blur"></div>
		</div>
	)
}

const mapProps = state => ({
	bots: state.bots.data,
	loading: state.bots.loading,
	error: state.bots.error,
})

const mapDispatch = dispatch => ({
	fetchBots: dispatch.bots.fetchBots,
})

export default connect(mapProps, mapDispatch)(Table)
