import './index.css'

const ThumbnailItem = props => {
  const {imageDetils, onClickImageThumbnail} = props

  const {id, thumbnailUrl} = imageDetils

  const onClickThumbnailItem = () => {
    onClickImageThumbnail(id)
  }

  return (
    <li className="listItem">
      <button
        className="thumbnailButton"
        type="button"
        onClick={onClickThumbnailItem}
      >
        <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
