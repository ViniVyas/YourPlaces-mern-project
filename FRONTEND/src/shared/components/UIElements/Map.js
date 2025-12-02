import React from "react";
import "./Map.css";

const Map = (props) => {
  return (
    <div
      className={`map ${props.className}`}
      style={{
        width: "100%",
        height: "300px",
        backgroundColor: "#b0d0ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#333",
        borderRadius: "10px",
        ...props.style,   // merge the styles passed through props
      }}
    >
      <h3>Map Placeholder</h3>
    </div>
  );
};

export default Map;
