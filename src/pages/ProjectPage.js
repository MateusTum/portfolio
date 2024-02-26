import React from "react";
import { useParams } from "react-router-dom";
import SocialProject from "../components/Projects/00-Social/SocialProject";

const Project = () => {
    const { projectId } = useParams();

    if (projectId == "0") {
        return (
            <SocialProject />
        );
    } else {
        return (
            <h1>
                Project id = {projectId}
            </h1>
        )
    }
};

export default Project;
