import { createContext, useContext, useState } from 'react';

let UserContext;
export default   UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState('');
  const [page, setPage] = useState('');
  
  return (
    <UserContext.Provider value={{ token, setToken ,setPage,page}}>
      {children}
    </UserContext.Provider>
  );
}