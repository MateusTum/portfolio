import React from "react";

function HelpIcon( {width, height, onClick} ) {
  const yOffset = 4;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      className="bi bi-info-circle"
      viewBox="0 0 16 16"
      style={{ cursor: "pointer", transform: `translateY(${yOffset}px)`, marginLeft:`5px` }}
      onClick={onClick}
    >
      <path d="M8 15A7 7 0 118 1a7 7 0 010 14m0 1A8 8 0 108 0a8 8 0 000 16"></path>
      <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 11-2 0 1 1 0 012 0"></path>
    </svg>
  );
}

export default HelpIcon;
