import React, { Fragment } from 'react'
import './Show.css'
import { useRouteMatch, useParams } from 'react-router-dom'
import { Header } from './../components.js'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
	return {
		url: state.url,
		title: state.title,
	}
}
const Show = (props) => {
	return (
		<Fragment>
			<Header title={props.title} />
			<iframe src={props.url} id="wikiIframe"></iframe>
		</Fragment>
	)
}

export default connect(mapStateToProps)(Show)
