import {Component} from 'react'

import ScoreCard from '../ScoreCard'

import ThumbnailItem from '../ThumbnailItem'

import TabItem from '../TabItem'

import './index.css'

class MatchGame extends Component {
  state = {
    score: 0,
    tabItemSelected: 'FRUIT',
    displayedImageItem: this.props.imagesList[0],
    isGameEnded: false,
    time: 60,
  }

  changeImage = () => {
    const {imagesList} = this.props

    const ramdomInt = Math.floor(Math.random() * imagesList.length)

    const randomItem = imagesList[ramdomInt]

    this.setState({displayedImageItem: randomItem})
  }

  changetime = () => {
    const {time} = this.state
    if (time <= 1) {
      clearInterval(this.timerId)
      this.setState({isGameEnded: true})
    }
    this.setState(prevState => ({time: prevState.time - 1}))
  }

  onClickImageThumbnail = id => {
    const {displayedImageItem} = this.state

    if (displayedImageItem.id === id) {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.changeImage()
    } else {
      clearInterval(this.timerId)
      this.setState({isGameEnded: true, time: 0})
    }
  }

  onClickTabItem = tabId => {
    this.setState({tabItemSelected: tabId})
  }

  componentDidMount = () => {
    this.timerId = setInterval(this.changetime, 1000)
  }

  onClickPlayAgain = () => {
    this.setState({
      score: 0,
      tabItemSelected: 'FRUIT',
      displayedImageItem: this.props.imagesList[0],
      isGameEnded: false,
      time: 60,
    })
    this.componentDidMount()
  }

  render() {
    const {tabsList, imagesList} = this.props

    const {score, tabItemSelected, isGameEnded, displayedImageItem, time} =
      this.state

    const sortedimagesList = imagesList.filter(
      imagesListItem => imagesListItem.category === tabItemSelected,
    )

    return (
      <div className="backgroundContainer">
        <ul className="navbar">
          <li>
            <img
              className="websitelogo"
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
            />
          </li>
          <li className="scoreDetails">
            <p className="score">
              Score: <span className="scoreandtime">{score}</span>
            </p>
            <div className="timer">
              <img
                className="timerlogo"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p className="scoreandtime">{time} sec</p>
            </div>
          </li>
        </ul>

        <div className="background">
          <div className="gameCardContainer">
            <div className="gameCardorScoreCard"></div>
            {isGameEnded ? (
              <ScoreCard
                score={score}
                onClickPlayAgain={this.onClickPlayAgain}
              />
            ) : (
              <div className="gameCard">
                <div className="imageContainer">
                  <img
                    className="images"
                    src={displayedImageItem.imageUrl}
                    alt="match"
                  />
                </div>

                <ul className="tabContainer">
                  {tabsList.map(tabitem => (
                    <TabItem
                      key={tabitem.tabId}
                      tabDetails={tabitem}
                      onClicktabItem={this.onClickTabItem}
                      isActive={tabItemSelected === tabitem.tabId}
                    />
                  ))}
                </ul>

                <ul className="itemsContainer">
                  {sortedimagesList.map(imageslistItem => (
                    <ThumbnailItem
                      key={imageslistItem.id}
                      imageDetils={imageslistItem}
                      onClickImageThumbnail={this.onClickImageThumbnail}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default MatchGame
