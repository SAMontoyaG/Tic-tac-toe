export const saveGameToStorage = ({ board, turn }) => {
    // Guardar partida en localStorage
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board', 'turn')
}