import React from "react";
import { Col } from "react-bootstrap";
import HtmlIcon from "../SVGS/HtmlIcon";
import JSIcon from "../SVGS/JavaScriptIcon";
import PythonIcon from "../SVGS/PythonIcon";
import SassIcon from "../SVGS/SassIcon";
import CssIcon from "../SVGS/CssIcon";

const LanguagesCol = () => {
    const icons = [
        { Component: JSIcon, key: 'js' },
        { Component: HtmlIcon, key: 'html' },
        { Component: SassIcon, key: 'sass' },
        { Component: CssIcon, key: 'css' },
        { Component: PythonIcon, key: 'python' },
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

export default LanguagesCol;