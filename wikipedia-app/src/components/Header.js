import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Header = (props) => {
	// Set logo to use in Header/NavBar
	const [wikiLogo] = useState(
		'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Wikipedia_svg_logo.svg/500px-Wikipedia_svg_logo.svg.png',
	)
	return (
		<div className="app-header">
			<Link to="/">
				<img src={wikiLogo} className="app-logo" alt="logo" />
			</Link>
			<h2>{props.title ? props.title : 'Wiki Emulator'}</h2>
		</div>
	)
}

export default withRouter(Header)
