// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, highScore, isPlaying} = props
  return (
    <nav className="nav-bar">
      <div className="scores-container">
        <img
          className="nav-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {isPlaying ? (
        <div className="scores-container">
          <p className="scores">score: {score}</p>
          <p className="scores">Top Score: {highScore}</p>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}
export default NavBar
