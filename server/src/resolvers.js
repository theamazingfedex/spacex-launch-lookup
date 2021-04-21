import { fetchAllLaunches } from './api.js'

export const resolvers = {
  Query: {
    info: () => 'A simple GraphQL Server to facilitate fetching basic data from SpaceX about their launch histories.',

    resultsByMissionName: (root, args) => fetchAllLaunches().then(allLaunches =>
      allLaunches.filter(launch =>
        args.missionName === ''
        || launch.mission_name.toLowerCase().includes(args.missionName.toLowerCase())
      )
    ),

    resultsByLaunchYear: (root, args) => fetchAllLaunches(`&launch_year=${args.launchYear}`),

    resultsByRocketName: (root, args) => fetchAllLaunches(`&rocket_name=${args.rocketName.replace(' ', '+')}`)
  }
}
