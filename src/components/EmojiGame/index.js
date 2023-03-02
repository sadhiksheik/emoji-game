import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  state = {score: 0, highScore: 0, isPlaying: true, clickedList: []}

  onClickPlayAgain = () => {
    this.setState({isPlaying: true})
    this.setState({score: 0})
    this.setState({clickedList: []})
  }

  onClickEmoji = id => {
    const {clickedList, score, highScore} = this.state

    if (clickedList.includes(id)) {
      this.setState({isPlaying: false})
      if (highScore < score) {
        this.setState({highScore: score})
      }
    } else if (clickedList.length === 11) {
      this.setState({score: 12, highScore: 12, isPlaying: false})
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        clickedList: [...prevState.clickedList, id],
      }))
    }
  }

  render() {
    const {score, highScore, isPlaying} = this.state
    const {emojisList} = this.props
    const shuffledList = emojisList.sort(() => Math.random() - 0.5)

    return (
      <div>
        <NavBar score={score} highScore={highScore} isPlaying={isPlaying} />
        <div className="bg-container">
          {isPlaying ? (
            <ul className="ul-container">
              {shuffledList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              score={score}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
