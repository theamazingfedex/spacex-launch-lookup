import fetch from 'node-fetch'

const baseUrl = 'https://api.spacexdata.com/v3'

export const fetchAllLaunches = (additionalQueryParams) => {
  const url = baseUrl +
  `/launches?filter=mission_id,mission_name,launch_date_unix,rocket,links,${additionalQueryParams}`

  return fetch(url).then(response => response.json())
}
