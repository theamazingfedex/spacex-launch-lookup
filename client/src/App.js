import logo from './things-i-added/spacex-logo.png';
import './App.css';
import SearchBar from './things-i-added/SearchBar.js'
import LaunchResults from './things-i-added/LaunchResults.js'
import { useState } from 'react'

function App() {
  const [lookupType, setLookupType] = useState('mission_name')
  const [lookupText, setLookupText] = useState('')

  // I left the launchResults in the header here because I liked the way it looked out of the box.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="500px" alt="logo" style={{ position: 'relative', left: '45px' }} />
        <SearchBar onSearch={(searchType, searchValue) => {
          setLookupText(searchValue)
          setLookupType(searchType)
        }} />
        <LaunchResults {...{lookupType, lookupText} } />
      </header>
    </div>
  );
}

export default App;
