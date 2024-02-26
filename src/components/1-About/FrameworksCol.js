import React from "react";
import DjangoIcon from "../SVGS/DjangoIcon";
import FlaskIcon from "../SVGS/FlaskIcon";

const FrameworksCol = () => {
  const icons = [
    { Component: DjangoIcon, key: "django" },
    { Component: FlaskIcon, key: "flask" },
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

export default FrameworksCol;
