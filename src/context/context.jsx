import { createContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      setUser(data?.session?.user || null);
    };
    getSession();
  }, []);

  console.log(user);

  return <Context.Provider value={user}>{children}</Context.Provider>;
};
