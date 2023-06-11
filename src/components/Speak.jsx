import React from "react";
import playIcon from "./images/icon-play.svg";

function Speak({ word }) {
  const handlePlayAudio = () => {
    const textToSpeech = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(word);
    textToSpeech.speak(utterance);
  };

  return (
    <div>
      <button type="button" onClick={handlePlayAudio}>
        <img src={playIcon} alt="Play Icon" />
      </button>
    </div>
  );
}

export default Speak;
