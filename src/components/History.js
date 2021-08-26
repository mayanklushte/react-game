import React from 'react'

const History = ({history, moveTo, currentMove}) => {
    return (
        <ul>
            {history.map((_, move) => {
                return (
                    <li key={move}>
                        <button
                            style={{
                                fontWeight: move === currentMove ? 'bold' : 'normal',
                                color: move === currentMove ? 'red': 'black'
                            }}
                            type='submit'
                            onClick={() => {
                            moveTo(move);
                        }}>
                            {move === 0 ?'Go To Game Start': `Go To Move #${move}`}
                        </button>
                    </li>
                );
            })}
            
        </ul>
    );
}

export default History
