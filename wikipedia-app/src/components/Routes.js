import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Show, NotFound } from '../views.js'

const Routes = () => {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/view">
						<Show />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default Routes
