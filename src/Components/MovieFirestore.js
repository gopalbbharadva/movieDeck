import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { useAuth } from "../Contexts/Autcontext";

const MovieFirestore = (collection) => {
  const { currentUser } = useAuth();
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(currentUser.uid)
      .collection(collection)
      .onSnapshot((snap) => {
        const documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setFavorites(documents);
      });
  }, [collection]);
  return { favorites };
};

export default MovieFirestore;
