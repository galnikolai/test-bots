import { init } from '@rematch/core'
import { bots } from './bots'

const models = {
	bots,
}

const store = init({
	models,
})

export default store
