import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import initialState from  '../initialState'

let theStore = compose(
	applyMiddleware(thunk, logger())
)(createStore)

export default function configStore(
	initialState) {
	return theStore(reducer, initialState)
}