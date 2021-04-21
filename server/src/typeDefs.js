// Still figuring out how server-side caching works, so I've included a rough shot at it:
export const typeDefs = `
  type Query {
    info: String!
    resultsByMissionName(missionName: String!): [Launch]!
    resultsByRocketName(rocketName: String!): [Launch]!
    resultsByLaunchYear(launchYear: String): [Launch]!
  }
  type Rocket @cacheControl(maxAge: 7200) {
    rocket_id: String!,
    rocket_name: String!,
    rocket_type: String!
  }
  type Links @cacheControl(maxAge: 3600) {
    video_link: String
  }
  type Launch @cacheControl(maxAge: 86400) {
    mission_id: String!
    mission_name: String!
    launch_date_unix: String!
    rocket: Rocket!
    links: Links
  }
`
