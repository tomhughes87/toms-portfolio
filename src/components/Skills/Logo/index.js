import React from "react";

export const Logo = ({ tech, path, tier }) => {
    return (
        <div className="logo">
            <div className="logo-img-wrapper rounded">
                <img src={path} alt={tech} />
            </div>
            <h3>{tech}</h3>
        </div>
    );
};
