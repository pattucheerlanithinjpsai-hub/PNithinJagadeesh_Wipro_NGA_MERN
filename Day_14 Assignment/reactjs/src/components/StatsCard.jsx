import React from "react";

// Using React.memo for pure component behavior
const StatsCard = React.memo(({ title, value, lastUpdated }) => {
  console.log(`Rendering ${title}`); // Logs when this card re-renders

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    width: "150px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const valueStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const updatedStyle = {
    fontSize: "12px",
    color: "#555",
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={valueStyle}>{value}</div>
      <div style={updatedStyle}>Last Updated: {lastUpdated}</div>
    </div>
  );
});

export default StatsCard;
