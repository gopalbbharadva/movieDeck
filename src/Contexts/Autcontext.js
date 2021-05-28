import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import { auth } from "../Firebaseconfig";

export const Authcontext = React.createContext();

export const useAuth = () => {
  return useContext(Authcontext);
};
const Authprovider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
  };
  return (
    <Authcontext.Provider value={value}>
      {!loading && children}
    </Authcontext.Provider>
  );
};

export default Authprovider;
