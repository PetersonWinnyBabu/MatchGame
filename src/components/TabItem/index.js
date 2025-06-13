import './index.css'

const TabItem = props => {
  const {tabDetails, onClicktabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClicktabitem = () => {
    onClicktabItem(tabId)
  }

  const isactivecss = isActive ? 'isActiveButton' : ''

  return (
    <li className="tabItem">
      <button
        className={`tabItemButton ${isactivecss}`}
        onClick={onClicktabitem}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
