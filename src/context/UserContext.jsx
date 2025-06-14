import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const { data:listner } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
        setDataLoading(false);
    });
    return () => {
      listner.subscription.unsubscribe();
    };
  }, []);

  const logOut = () => {
    supabase.auth.signOut()
  }

  return (
    <UserContext.Provider value={{ user, dataLoading, logOut }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
