import axios from 'axios'

export const bots = {
	state: {
		data: [],
		error: false,
		loading: false,
	},
	reducers: {
		data: (state, payload) => {
			return {
				...state,
				data: payload,
			}
		},
		loading: (state, loading) => {
			return {
				...state,
				loading,
			}
		},
		error: (state, error) => {
			return {
				...state,
				error,
			}
		},
	},
	effects: dispatch => ({
		async fetchBots() {
			try {
				dispatch.bots.loading(true)
				const response = await axios.get(
					'https://new.cs.money/2.0/load_bots'
				)
				await dispatch.bots.data(response.data)
				dispatch.bots.loading(false)
			} catch (error) {
				dispatch.bots.loading(false)
				dispatch.bots.error(true)
			}
		},
	}),
}
