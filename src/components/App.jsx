import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "./App.css";
import "./serachBar.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [selectedFont, setSelectedFont] = useState("");

  const handleFontChange = (props) => {
    setSelectedFont(props.target.value);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const custom = {
    backgroundColor: isDarkTheme ? "#000" : "#fff",
    color: isDarkTheme ? "#fff" : "#000",
    fontFamily: selectedFont
  };

  return (
    <div className={` main ${isDarkTheme ? "dark-theme" : "light-theme"}`} style={custom}>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} onChange={handleFontChange} />
      <SearchBar />
    </div>
  );
}
export default App;
