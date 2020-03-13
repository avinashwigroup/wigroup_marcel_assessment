import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import './Home.css'
import { SearchBar, Header, ResponseMessage } from './../components.js'
import { storeWikiMeta } from '../state/actions/index'
import { useHistory } from 'react-router-dom'

function mapDispatchToProps(dispatch) {
	return {
		storeWikiMeta: (meta) => dispatch(storeWikiMeta(meta)),
	}
}

const Home = (props) => {
	const [url, setUrl] = useState(
		'http://en.wikipedia.org/w/api.php?origin=*&action=query&generator=search&format=xml&gsrprop=snippet&prop=info&inprop=url&format=json&gsrsearch=',
	)
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [hasError, setHasError] = useState(false)
	const [errorMessage] = useState('No matches.')
	const [showList, setShowList] = useState(false)
	const [typingTimeout, setTypingTimeout] = useState(0)
	const history = useHistory()

	// Function to store selected item in local storage.
	const selectSuggestion = (key) => {
		props.storeWikiMeta([
			{
				title: data[key].title,
				url: data[key].fullurl,
			},
		])
		history.push('/view')
	}

	// Function to query wikipedia and get search results on input of textbox.
	const searchQuery = (query) => {
		setHasError(false)

		if (typingTimeout) {
			clearTimeout(typingTimeout)
		}

		setTypingTimeout({
			typingTimeout: setTimeout(function() {
				// If textbox is not empty.
				if (query !== '') {
					setLoading(true)

					axios
						.get(url + query)
						.then((response) => {
							setData(Object.keys(response.data.query.pages).map((key) => response.data.query.pages[key]))
						})
						.catch((error) => {
							setHasError(true)
							setData([])
						})
						.finally(() => {
							setLoading(false)
						})
				} else {
					setData([])
				}
			}, 1500),
		})
	}

	return (
		<Fragment>
			<Header />
			<div className="app-component">
				<SearchBar
					search={searchQuery}
					data={data}
					loading={loading}
					select={selectSuggestion}
					showList={showList}
					setShow={setShowList}
					hasError={hasError}
					message={errorMessage}
				/>
			</div>
		</Fragment>
	)
}

export default connect(null, mapDispatchToProps)(Home)
