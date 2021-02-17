import React, { useState } from "react";

const AddBoxButton = () => {
    const [colors, setColors] = useState([]);
    const box = {
        width: "200px",
        height: "200px",
    };
    const handleClick = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setColors((prev) => [...prev, randomColor]);
    };
    return (
        <>
            <div style={{width:'70%', margin:"50px auto"}}>
            <button className="glow-on-hover" onClick={handleClick}>Add new box!</button>
            <div style={{ display: "flex", flexWrap: "wrap"  }}>
                {colors.map((color, i) => (
                    <div key={i} style={{ ...box, backgroundColor: color }} />
                ))}
            </div></div>
        </>
    );
};
export default AddBoxButton;