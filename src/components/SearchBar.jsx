import React from "react";
import { useState } from "react";
import SearchIcon from "./images/icon-search.svg";
import Speak from "./Speak";
import "./serachBar.css"

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [word, setWord] = useState("");
  const [content, setContent] = useState("");
  const [phonetics, setPhonetics] = useState("");
  const [part, setPart] = useState("");
  const [synonym, setSynonym] = useState("");
  const [sourceURL, setSourceURL] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchContent = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].word);
        setPhonetics(data[0].phonetic);
        setPart(data[0].meanings[0].partOfSpeech);
        setContent(data[0].meanings[0].definitions[0].definition);
        setSynonym(data[0].meanings[0].synonyms.join("    "));
        setSourceURL(data[0].sourceUrls);
      });
  };

  return (
    <div>
      <div className="search">
        <input type="text" placeholder="Search for a word" value={searchTerm} onChange={handleChange} />
        <button type="submit" onClick={fetchContent}>
          <img src={SearchIcon} alt="Search Icon" />
        </button>
      </div>
      <div className="hero">
        <div className="word">
          <h1>{word}</h1>
          <p>{phonetics}</p>
        </div>
        <div>
          <Speak word={word} />
        </div>
      </div>
      <p className="partOfSpeech">{part}<hr /></p>
      <div>

        <p className="meaning">Meaning <br/> <br/>
            <span>
              {content}
            </span>
        </p>

        <p className="synonyms">
          Synonyms: <span>
          {synonym}
          </span>
         </p> 

      </div>
      <hr/>
      <a className="sourceURL" href={sourceURL}>Source: <span>{sourceURL}</span></a>
    </div>
  );
}

export default SearchBar;
