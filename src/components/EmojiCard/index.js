// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onEmojiClicked = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-container">
      <button className="button" type="button" onClick={onEmojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
