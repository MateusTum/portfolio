import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import Icons from "../SVGS/Icons";

function SquareIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="white"
      className="bi bi-square"
      viewBox="0 0 18 18"
    >
      <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2z"></path>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="white"
      className="bi bi-plus-square"
      viewBox="0 0 18 18"
    >
      <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2z"></path>
      <path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4"></path>
    </svg>
  );
}

function DashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="white"
      className="bi bi-dash-square"
      viewBox="0 0 18 18"
    >
      <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2z"></path>
      <path d="M4 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 014 8"></path>
    </svg>
  );
}

const SearchFilter = ({ filters, setFilters }) => {
  const iconNames = Object.keys(Icons);

  const [filterState, setFilterState] = useState(
    iconNames.reduce((acc, name) => ({ ...acc, [name]: "none" }), {})
  );

  const stateIcons = {
    Square: SquareIcon,
    Plus: PlusIcon,
    Dash: DashIcon,
  };

  const updateFilters = (name, newState) => {
    setFilters((prevFilters) => {
      const { include, exclude } = prevFilters;
      return {
        include:
          newState === "include"
            ? [...include, name]
            : include.filter((n) => n !== name),
        exclude:
          newState === "exclude"
            ? [...exclude, name]
            : exclude.filter((n) => n !== name),
      };
    });
  };

  const handleClick = (name) => {
    const currentState = filterState[name];
    const nextState =
      currentState === "none"
        ? "include"
        : currentState === "include"
        ? "exclude"
        : "none";

    setFilterState((prevState) => ({
      ...prevState,
      [name]: nextState,
    }));

    updateFilters(name, nextState);
  };

  const clearFilters = () => {
    setFilterState(
      iconNames.reduce((acc, name) => ({ ...acc, [name]: "none" }), {})
    );
    setFilters({ include: [], exclude: [] });
  };

  return (
    <>
      {iconNames.map((name, index) => (
        <Col
          key={index}
          className="mx-auto"
          onClick={() => handleClick(name)}
          style={{
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          {React.createElement(
            stateIcons[
              filterState[name] === "none"
                ? "Square"
                : filterState[name] === "include"
                ? "Plus"
                : "Dash"
            ]
          )}
          <br />
          <span> {name} </span>
        </Col>
      ))}
      <Col lg={12} className="mb-1">
        <Button variant="dark" onClick={clearFilters}>
          Clear Filters
        </Button>
      </Col>
    </>
  );
};

export default SearchFilter;
