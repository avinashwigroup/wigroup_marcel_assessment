import React, {
  useState
} from 'react';
import './Home.css';
import {
  Header,
  Frame
} from '../components.js';
import axios from 'axios';

const Home = () => {
  const [input, setInput] = useState("")
  const [url, setUrl] = useState("")
  const [error, setError] = useState("")

  const onInput = (input) => {
    setError("")
    setInput(input)
  }

  const validateUrl = () => {
    const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
    if(input === "" || !regex.test(input))
    {
      setError("Please provide a valid url")
      return false
    }

    return true
  }

  const searchUrl = () => {
    if(validateUrl()) {
      setUrl("https://" + input)
    }
  }
  return (
    <div className="App">
      <Header
        input={input}
        onInput={onInput}
        searchUrl={searchUrl}
        error={error}
        />
      <Frame url={url}/>
    </div>
  )
}

export default Home
