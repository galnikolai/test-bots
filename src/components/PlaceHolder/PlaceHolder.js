import React from 'react'
import './PlaceHolder.css'

const PlaceHolder = () => {
	const getRandomNum = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min)
	}

	const renderHolderArray = () => {
		const arr = []
		for (let i = 0; i < 50; i++) arr.push(i)
		return arr
	}

	return renderHolderArray().map(i => {
		return (
			<tr key={i}>
				<td>
					<div
						className="placeholder"
						style={{ width: `${getRandomNum(20, 30)}px` }}
					></div>
				</td>
				<td>
					<div
						className="placeholder"
						style={{ width: `${getRandomNum(100, 130)}px` }}
					></div>
				</td>
				<td>
					<div
						className="placeholder"
						style={{ width: `${getRandomNum(50, 100)}px` }}
					></div>
				</td>
				<td>
					<div
						className="placeholder"
						style={{ width: `${getRandomNum(20, 30)}px` }}
					></div>
				</td>
			</tr>
		)
	})
}

export default PlaceHolder
