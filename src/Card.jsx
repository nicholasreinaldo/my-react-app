import profilePic from './assets/profile.jpg'
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2>Nicholas</h2>
      <p>I make Youtube videos and play video games</p>
    </div>
  )
}

export default Card
