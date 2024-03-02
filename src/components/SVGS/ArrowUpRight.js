import React from "react";

function ArrowUpRight() {
    const yOffset = -2; // Move up by 50 pixels
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-box-arrow-up-right"
      viewBox="0 0 16 16"
      style={{
        transform: `translateY(${yOffset}px)`,
      }}
    >
      <path
        fillRule="evenodd"
        d="M8.636 3.5a.5.5 0 00-.5-.5H1.5A1.5 1.5 0 000 4.5v10A1.5 1.5 0 001.5 16h10a1.5 1.5 0 001.5-1.5V7.864a.5.5 0 00-1 0V14.5a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h6.636a.5.5 0 00.5-.5"
      ></path>
      <path
        fillRule="evenodd"
        d="M16 .5a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h3.793L6.146 9.146a.5.5 0 10.708.708L15 1.707V5.5a.5.5 0 001 0z"
      ></path>
    </svg>
  );
}

export default ArrowUpRight;