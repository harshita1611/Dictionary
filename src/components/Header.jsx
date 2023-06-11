import React , {useState} from "react";
import logo from "./images/logo.svg";
import icon from "./images/icon-moon.svg";
import "./Header.css";

function Header(props) {
  const { toggleTheme, isDarkTheme } = props;
  const [selectedFont, setSelectedFont] = useState("");

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  const custom = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1rem",
    fontFamily: selectedFont
  };

  return (
    <div style={custom}>
    <img src={logo} alt="Logo" />
    <select value={selectedFont} onChange={handleFontChange}>
        <option value="">Select a font</option>
        <option value="Arial, sans-serif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
      </select>
      <label className="toggle">
        <input
          type="checkbox"
          checked={isDarkTheme}
          onChange={toggleTheme}
        />
        <span className="slider"></span>
        
      </label>
      <img src={icon} alt="Toggle Icon" />
      
    </div>
  );
}

export default Header;
