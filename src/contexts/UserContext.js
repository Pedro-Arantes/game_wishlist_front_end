import { createContext, useContext, useState } from 'react';


const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [token, setToken] = useState('');
  
  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}
export function useUserContext() {
  return useContext(UserContext);
}