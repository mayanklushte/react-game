import React from 'react'

const StatusMessage = ({ winner, current }) => {
    // const message = winner ? `Winner Is ${winner}`: 

    const noMoveLeft = current.board.every(el => el !== null)

    return (
        <h2>
            {winner &&
                (<>
                Winner is {' '}
                <span style={{color:winner  === 'X'  ? '#ffa31a': '#33cc33'}}>{winner}</span>
                </>)}
            
            {!winner && !noMoveLeft && (<>
                Next Player Is{' '}
                <span style={{color:current.isXNext  ? '#ffa31a': '#33cc33'}}>{current.isXNext ? 'X' : 'O'}</span>
                </>)}
            {!winner && noMoveLeft && (<>
                
                <span style={{color: '#ffa31a'}}>X</span> {' '} And {' '} <span style={{color: '#33cc33'}}>O</span>Tied
                </>)}
        </h2>
    )
}

export default StatusMessage
