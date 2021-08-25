import React, {useState} from 'react'
import Boards from './components/Boards'
import Square from './components/Square'
import calculateWinner from './helper'
import './styles/root.scss'
const App = () => {

    const [history, setHistory] = useState([{ board: Array(9).fill(null), isXNext: true }]);
    const [currentMove, setCurrentMove] = useState(0)
    

    const current = history[currentMove]

    const winner = calculateWinner(current.board);
    const message = winner ? `Winner Is ${winner}`: `Next Player Is ${current.isXNext ? 'X': 'O'}`

    const handleSquareClick = position => {
        if (current.board[position] || winner) {
            return;
        };
        
        setHistory(prev => {
            const last = prev[prev.length - 1];
            const newBoard = last.board.map((square, pos) => {
                if (pos === position) {
                    return last.isXNext ? 'X' : 'O';
                }

                return square;
            });

            return prev.concat({ board: newBoard, isXNext: !last.isXNext });
        });

        setCurrentMove(prev => prev + 1);
        
    }

    return (
        <div className='app'>
        <h1>Tic Tac Toe</h1>
        <h2>{message}</h2>
        <Boards board={current.board} handleSquareClick={handleSquareClick} />
            
        </div>
    )
}

export default App



