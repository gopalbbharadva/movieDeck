import React, { useState } from "react";
import {useAuth} from '../Contexts/Autcontext';

const imagepath = "https://image.tmdb.org/t/p/w1280";

export default function Moviemodal({ currentMovie, setSelectedMovie }) {
  // const [flag,setFlag]=useState(false);
  // const resetFlag = () => {
  //     currentMovie=null;
  //     setFlag(false);

  const {currentUser}=useAuth();

  const modalHandler = (e) => {
    if (e.target.classList.contains("main-modal")) setSelectedMovie(null);
  };

  const setColor = (rating) => {
    if (rating >= 7) return "green";
    else if (rating < 7 && rating > 4) return "yellow";
    else return "red";
  };
  return (
    // <>{console.log(currentMovie)}</>
    <div
      onClick={modalHandler}
      className="main-modal"
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1 }}
    >
      <div className="sub-modal">
        <img
          src={
            currentMovie.backdrop_path
              ? imagepath + currentMovie.backdrop_path
              : "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          alt="not render"
          // initial={{ y: "-10vh" }}
          // animate={{ y: "0" }}
        />
        <div className="modal-overview">
          {currentUser && <button>Add</button>}
          <h3>Overview</h3>
          <p className="over-para">{currentMovie.overview}</p>
          <h3>Rating</h3>
          <p className={setColor(currentMovie.vote_average)}>
            {currentMovie.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
}
