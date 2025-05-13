import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data?.session?.user ?? null);
      setLoading(false);
    };
    getSession();

    const {data: authListner } = supabase.auth.onAuthStateChange((event, session)=>{
      setUser(session?.user ?? null);
      setLoading(false)
    })

    return () => {
      authListner.subscription.unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user , loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);