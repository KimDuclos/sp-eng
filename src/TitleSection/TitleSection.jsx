import React from "react";
import "./TitleSection.scss";
import Button from "@material-ui/core/Button";

const TitleSection = () => {
    return (
        <>
            <div className="title">
                Storm Peak Engineering
            </div>
            <div className="description">
                Description of your business goes here
            </div>
            <div className="socialButtons">
                <Button variant="contained">LinkedIn</Button>
                <Button variant="contained">GitHub</Button>
                <Button variant="contained">Email</Button>
            </div>

        </>    
    );
}

export default TitleSection;