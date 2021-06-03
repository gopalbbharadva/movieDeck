import React, { useContext, useEffect, useState } from "react";
import { auth } from "../Firebaseconfig";
import firebase from "firebase";
// import {firestoreRef} from '../Firebaseconfig';

export const Authcontext = React.createContext();

export const useAuth = () => {
  return useContext(Authcontext);
};
const Authprovider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        return firebase.firestore().collection("users").doc(cred.user.uid).set({
          email: email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signOut() {
    return auth.signOut();
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
    signIn,
    signOut,
  };
  return (
    <Authcontext.Provider value={value}>
      {!loading && children}
    </Authcontext.Provider>
  );
};

export default Authprovider;
