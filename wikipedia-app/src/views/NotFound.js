import React, { Fragment } from 'react'

import { Header } from './../components.js'

const NotFound = (props) => {
	return (
		<Fragment>
			<Header title={props.title} />
			<h2>Page not found</h2>
		</Fragment>
	)
}

export default NotFound
