import React from "react";
import { Col } from "react-bootstrap";
import DjangoIcon from "../SVGS/DjangoIcon";
import FlaskIcon from "../SVGS/FlaskIcon";

const FrameworksCol = () => {
    const icons = [
        { Component: DjangoIcon, key: 'django' },
        { Component: FlaskIcon, key: 'flask' },
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

export default FrameworksCol;