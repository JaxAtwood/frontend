import React from 'react';
import "../styles/SignNav.css";
import wave from "../assets/wave1.png";


export default function SignNav() {
  return (
    <div class="signnav">
      <img class="wave1" src={wave}></img>
      {/* <a>sign in</a>
      <a>sign up</a> */}
    </div>
  );
}
