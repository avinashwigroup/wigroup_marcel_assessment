import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './state/store/index'
import * as serviceWorker from './serviceWorker'

window.store = store
var storage = window.localStorage
window.store.subscribe(() => {
	saveState(store.getState())
})

const saveState = (state) => {
	try {
		let serializedState = JSON.stringify(state)
		storage.setItem('wiki.meta', serializedState)
	} catch (err) {
		console.log(err)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
