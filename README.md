# SpaceX Launch Lookup
###### - Daniel Wood (2021)

## Setup
1. Clone this repository into a new folder on your computer.
2. From a terminal window, navigate into the folder created above.
3. Navigate to the `/server` folder and execute `yarn install`
4. While in the `/server` folder, execute `yarn start`
   * you should see the message `Server is running on http://localhost:4000/` logged in your terminal.
5. Now, open a new terminal window in the `/client` folder of this repository.
6. While in the `/client` folder, execute `yarn install` and wait for it to complete.
7. Once yarn has finished installing dependencies, execute `yarn start` and a browser window should open and take you to the application.

### GraphQL Queries
There are three GraphQL queries in-use by the client application:
1. resultsByMissionName(missionName: String)
   * accepts any string, filters mission names using a simple .includes check.
   * returns all missions if `missionName === ''`
2. resultsByRocketName(rocketName: String)
   * passes through a feature from the source API to allow filtering based on the name of the rocket.
   * API limitation restricts this to be a strict-match. (e.x. Searching "Falcon" won't return "Falcon 9" rockets.)
3. resultsByLaunchYear(launchYear: String)
   * accepts a string which is expected to be a 4-digit year.