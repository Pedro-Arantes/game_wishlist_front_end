import { createContext, useContext, useState } from 'react';


const GameContext = createContext();
export default GameContext;

export function GameProvider({ children }) {
  const [DtGame, setDtGame] = useState('');
  
  return (
    <GameContext.Provider value={{ DtGame, setDtGame }}>
      {children}
    </GameContext.Provider>
  );
}
export function useGameContext() {
  return useContext(GameContext);
}