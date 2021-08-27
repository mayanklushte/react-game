import React from 'react'

const Square = ({ value, onClick, isWinningSquare }) => {
    
    
    
    return <button
        className="square"
        onClick={onClick}
        style={{
                fontWeight: isWinningSquare ? 'bold' : 'normal',
                color: isWinningSquare ? '#ffa31a' : 'black'
            }}
        type="button">{value}</button>
}

export default Square
