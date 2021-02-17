import React, { useState } from "react";

export default function MovingDiv() {
    const initialPosition = {
        top: "0px",
        left: "0px",
    };
    const [position, setPosition] = useState(initialPosition);
    const handleOver = (min, max) => {
        setPosition({
            top: Math.floor(Math.random() * (max - min + 1) + min),
            left: Math.floor(Math.random() * (max - min + 1) + min),
        });
    };
    const crazyStyle = {
        width: "110px",
        height: "110px",
        position: "absolute",
        backgroundColor: "#0077c8",
        transition: "ease 500ms",
        borderRadius: "5px",
        ...position,
    };
    return <div onMouseOver={() => handleOver(0, 600)} style={crazyStyle} />;
}