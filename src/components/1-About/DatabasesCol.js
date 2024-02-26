import React from "react";
import PostgreeSqlIcon from "../SVGS/PostgreeSqlIcon";
import SQLiteIcon from "../SVGS/SQLiteIcon";

const DatabasesCol = () => {
  const icons = [
    { Component: PostgreeSqlIcon, key: "postgree" },
    { Component: SQLiteIcon, key: "sqlite" },
  ];

  return (
    <>
      {icons.map(({ Component, key }) => (
        <div key={key}>
          <Component width={40} height={40} />
        </div>
      ))}
    </>
  );
};

export default DatabasesCol;
