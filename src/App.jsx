import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Content from './components/Content'
import { useState } from 'react'

function App() {

  const [word, setWord] = useState("Hello")

  return (
    <>
      <Header />
      <SearchBar setPalabra={setWord} />
      <Content palabra={word}/> 
    </>
  )
}

export default App
