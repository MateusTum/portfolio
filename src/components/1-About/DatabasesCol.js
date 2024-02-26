import React from "react";
import { Col } from "react-bootstrap";
import PostgreeSqlIcon from "../SVGS/PostgreeSqlIcon";
import SQLiteIcon from "../SVGS/SQLiteIcon";

const DatabasesCol = () => {
    const icons = [
        { Component: PostgreeSqlIcon, key: 'postgree' },
        { Component: SQLiteIcon, key: 'sqlite' },
    ];

    return (
        <>
            {icons.map(({ Component, key }) => (
                <Col lg={2} className="text-center m-1" key={key}>
                    <Component width={40} height={40} />
                </Col>
            ))}
        </>
    );
};

export default DatabasesCol;