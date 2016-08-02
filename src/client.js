import React from 'react'
import { render } from 'react-dom'
import configStore from './redux/store'
import { Provider } from 'react-redux'
import App from './components/App'
import initialState from  './initialState'

let display = document.getElementById('app');
let store = configStore(initialState)

render(
	<Provider store={store}>
		<App />
	</Provider>, display)

window.React = React // enable debugger