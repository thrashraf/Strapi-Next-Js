import react, { createContext, useState, useEffect } from 'react';
import nookies, { parseCookies } from 'nookies';

const AuthContext = createContext({
  user: null,
  loading: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const cookie = parseCookies();
  console.log(cookie.jwt);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthContext;
