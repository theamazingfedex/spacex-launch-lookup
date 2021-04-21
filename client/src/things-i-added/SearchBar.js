import { useState } from 'react'
import { getPlaceholderForType } from './utils'

const SearchBar = ({ onSearch }) => {
  const [lookupType, setLookupType] = useState('mission_name')
  const [searchText, setSearchText] = useState('')

  return (
    <div style={{ width: '90%', margin: '0 auto'}}>
      <form onSubmit={(e) => {
        onSearch(lookupType, e.target[1].value)
        e.preventDefault()
      }}>
        <span style={{ fontSize: '14px' }}>Lookup Launches&nbsp;</span>
        <select onChange={(e) => setLookupType(e.currentTarget.value)} defaultValue="mission_name" style={{ width: 'auto' }}>
          <option value="mission_name">By Mission Name</option>
          <option value="rocket_name">By Rocket Name</option>
          <option value="launch_year">By Launch Year</option>
        </select>
        <input type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
          placeholder={getPlaceholderForType(lookupType)}
          style={{ width: '250px' }}/>
        <button type="submit">Go!</button>
      </form>
    </div>
  )
}

export default SearchBar