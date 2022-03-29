import './App.scss';
import {useState, createContext} from 'react'
import Home from './components/home';
import { startingBoard } from './startingboard'

export const ContextAPI = createContext();

function App() {

    const [board, setBoard] = useState(startingBoard);

    return (
        <div className="App">
            <ContextAPI.Provider value = {{board, setBoard}}>
                <Home/>
            </ContextAPI.Provider>
        </div>
    );
}

export default App;
