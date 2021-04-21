
const LaunchResult = ({ mission_name, rocket, launch_date_unix, links }) => {
  return (
    <div className="launch-result" style={{ fontSize: '16px', maxWidth: '250px', padding: '14px', margin: '12px', backgroundColor: '#005288' }}>
      <div className="mission-name">
        <div>Mission Name: </div>
        <div style={{fontSize: '24px'}}>{mission_name}</div>
      </div>
      <br/>
      <div className="rocket-name">
        <span>Rocket Name: </span>
        {rocket.rocket_name}
      </div>
      <div className="launch-date">
        <span>Launch Date: </span>
        {new Date(launch_date_unix * 1000).toDateString()}
      </div>
      <div className="video-link">
        {
          links && links.video_link
            ? (<a href={links.video_link} style={{ color: 'red' }} target="_blank" rel="noreferrer">
                {links.video_link}
                </a>)
            : (<span style={{ color: 'red'}}>video not available</span>)
        }
      </div>
    </div>
  )
}

export default LaunchResult