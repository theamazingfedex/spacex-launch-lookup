export const snakeToPascal = (str) =>
  str.split('_').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')

export const getKeyForFiltering = (result) => {
 return new Date(result.launch_date_unix * 1000).toDateString() + '-' + result.mission_name + '-' + result.rocket.rocket_name
}

export const getPlaceholderForType = (lookupType) => {
  switch(lookupType) {
    case 'mission_name':
      return 'e.x. Starlink'
    case 'rocket_name':
      return 'e.x. Falcon Heavy'
    case 'launch_year':
      return 'e.x. 2020'
    default:
      return ''
  }
}
