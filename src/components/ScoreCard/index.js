import './index.css'

const ScoreCard = props => {
  const {score, onClickPlayAgain} = props

  const onClickPlayAgainButton = () => {
    onClickPlayAgain()
  }
  return (
    <div className="bgContainer">
      <div className="trophycontainers">
        <div className="trophy">
          <img
            className="trophyImage"
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
          />
        </div>
        <p className="yourscore">YOUR SCORE</p>
        <p className="score">{score}</p>

        <button
          className="playAgainButton"
          type="button"
          onClick={onClickPlayAgainButton}
        >
          <img
            className="reset"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ScoreCard
