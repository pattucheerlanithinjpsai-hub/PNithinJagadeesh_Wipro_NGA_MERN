import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import ProfileCard from "./components/ProfileCard";
import WorkoutTracker from "./components/WorkoutTracker";

function App() {
  // Challenge 5 — Theme Context
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
    // Optional: save to localStorage for persistence
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          padding: "20px",
          minHeight: "100vh",
          background: theme === "light" ? "#f5f5f5" : "#111",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <h1>Day 15 — React Hooks & Context API</h1>

        {/* Challenge 5 — Theme toggle */}
        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 20px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          Toggle Theme
        </button>

        {/* Profile Card — consumes ThemeContext */}
        <ProfileCard />

        {/* Challenge 7 — Workout Tracker */}
        <WorkoutTracker />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
