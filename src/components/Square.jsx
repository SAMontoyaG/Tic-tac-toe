export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
  
    const handleClick = () => {
      updateBoard(index)
    }
  
    // Al dar clic en el div se maneja el evento handleClick
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }