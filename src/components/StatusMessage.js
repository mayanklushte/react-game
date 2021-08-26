import React from 'react'

const StatusMessage = ({ winner, current }) => {
    // const message = winner ? `Winner Is ${winner}`: 

    const noMoveLeft = current.board.every(el => el !== null)

    return (
        <h2>
            {winner && `Winner is ${winner}`}
            {!winner && !noMoveLeft && `Next Player Is ${current.isXNext ? 'X' : 'O'}`}
            {!winner && noMoveLeft && `X And O Tied`}
        </h2>
    )
}

export default StatusMessage
