import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

export default function ProfileCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "20px",
        borderRadius: "10px",
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff"
      }}
    >
      <h3>Profile Card</h3>
      <p>Current Theme: {theme}</p>
    </div>
  );
}
