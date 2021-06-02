import React, { useState } from "react";

const imagepath = "https://image.tmdb.org/t/p/w1280";

export default function Moviemodal({ currentMovie, selectHandler }) {
  // const [flag,setFlag]=useState(false);
  // const resetFlag = () => {
  //     currentMovie=null;
  //     setFlag(false);

  selectHandler = () => {
    currentMovie = null;
  };
  //   };
  return (
    // <>{console.log(currentMovie)}</>
    <div
      onClick={selectHandler}
      className="main-modal"
      //   onClick={modalHandler}
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1 }}
    >
      <div className='sub-modal' >
        <img
          style={{ height: "300px", width: "20%" }}
          src={
            currentMovie.poster_path
              ? imagepath + currentMovie.poster_path
              : "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          alt="not render"
          // initial={{ y: "-10vh" }}
          // animate={{ y: "0" }}
        />
        <p >{currentMovie.overview}</p>
      </div>
    </div>
  );
}
