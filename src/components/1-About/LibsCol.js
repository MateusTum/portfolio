import React from "react";
import BootstrapIcon from "../SVGS/BootstrapIcon";
import ReactIcon from "../SVGS/ReactIcon";

const LibsCol = () => {
  const icons = [
    { Component: BootstrapIcon, key: "bootstrap" },
    { Component: ReactIcon, key: "react" },
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

export default LibsCol;
