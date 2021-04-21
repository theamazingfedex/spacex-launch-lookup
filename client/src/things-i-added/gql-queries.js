import { gql } from "@apollo/client"

export const getLaunchResultsQuery = (lookupType) => {
  switch(lookupType) {
    case 'mission_name':
      return queryByMissionName
    case 'rocket_name':
      return queryByRocketName
    case 'launch_year':
      return queryByLaunchYear
    default:
      return queryByMissionName
  }
}

export const queryByMissionName = gql`
  query getLaunchResultsByMissionNameQuery($param: String!) {
    resultsByMissionName(missionName: $param) {
      mission_name
      launch_date_unix
      links {
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
`
export const queryByRocketName = gql`
  query getLaunchResultsByRocketNameQuery($param: String!) {
    resultsByRocketName(rocketName: $param) {
      mission_name
      launch_date_unix
      links {
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
`
export const queryByLaunchYear = gql`
  query getLaunchResultsByLaunchYearQuery($param: String!) {
    resultsByLaunchYear(launchYear: $param) {
      mission_name
      launch_date_unix
      links {
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
`
