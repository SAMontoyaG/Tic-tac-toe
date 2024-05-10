import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
    // Se revisan las posiciones ganadoras 'WINNER_COMBOS'
    // Saber si X u O gano
    for(const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && // 0 -» X u O
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] // retorna el ganador: X u O
      }
    }
    // Si no hay ganador
    return null
  }

export const checkEndGame = (newBoard) => {
    // Se revisa si hay un empate, si no hay espacios vacios
    // Cuando las posiciones de newBoard sean diferentes a null a terminado el juego
    return newBoard.every((square) => square !== null)
  }