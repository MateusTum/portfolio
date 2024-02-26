import React from "react";
import { Col } from "react-bootstrap";
import BootstrapIcon from "../SVGS/BootstrapIcon";
import ReactIcon from "../SVGS/ReactIcon";

const LibsCol = () => {
    const icons = [
        { Component: BootstrapIcon, key: 'bootstrap' },
        { Component: ReactIcon, key: 'react' },
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

export default LibsCol;