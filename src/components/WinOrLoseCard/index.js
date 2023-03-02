// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgain} = props

  const buttonClicked = () => {
    onClickPlayAgain()
  }

  const LOSE_IMAGE =
    'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

  const imageUrl = score === 12 ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = score === 12 ? 'You Won' : 'You Lose'
  const scoreLabel = score === 12 ? 'Best Score' : 'Score'

  return (
    <div className="loose-container">
      <div className="details-container">
        <h1 className="result-heading">{gameStatus}</h1>
        <p className="result-heading">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button className="play-button" type="button" onClick={buttonClicked}>
          Play Again
        </button>
      </div>
      <img className="result-image" src={imageUrl} alt="win or lose" />
    </div>
  )
}
export default WinOrLoseCard
