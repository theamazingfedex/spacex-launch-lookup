import { useQuery } from "@apollo/client"
import LaunchResult from './LaunchResult.js'
import { getLaunchResultsQuery } from './gql-queries'
import { useState, useMemo } from 'react'
import { snakeToPascal, getKeyForFiltering } from './utils'

const LaunchResults = ({ lookupType, lookupText }) => {
  const [filterText, setFilterText] = useState('')
  const { data, loading, error } = useQuery(getLaunchResultsQuery(lookupType), {
    variables: { param: lookupText }
  })

  const filteredResults = useMemo(() => data && data[`resultsBy${snakeToPascal(lookupType)}`].map((result) =>
    <LaunchResult { ...result } key={getKeyForFiltering(result)}/>
  ).filter(m => m.key.toLowerCase().includes(filterText.toLowerCase())), [data, filterText, lookupType])

  if (loading) {
    return (<div>LOADING....</div>)
  }
  if (error) {
    return (<div>ERROR: <div>{error.message}</div></div>)
  }


  return (
    <div style={{ width: '100%'}}>
      <div style={{fontSize: '14px', marginTop: '24px'}}>
        <span>Filter: </span>
        <input
          type="text"
          title="e.x. Jan, 10, 2015, Raptor, Dragon, etc."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {
          filteredResults.length > 0
            ? filteredResults
            : <div>No Results Available</div>
        }
      </div>
    </div>
  )
}

export default LaunchResults