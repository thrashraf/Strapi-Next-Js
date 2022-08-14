import react, { createContext, useState, useEffect, useContext } from 'react';
import nookies, { parseCookies } from 'nookies';
import api from './api';

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const cookie = parseCookies();
      if (cookie.jwt) {
        api.defaults.headers.Authorization = `Bearer ${cookie.jwt}`;
        const { data: user } = await api.get('/api/users/me');
        setUser(user);
      }
      setLoading(false);
    }

    if (user) {
    }
    loadUserFromCookies();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
