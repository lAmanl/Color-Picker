import React, { useState, useEffect } from 'react';


const ColorPicker = ({ colors }) => {
    const [color, setcolor] = useState(null);
    const [list, setlist] = useState(false);

    const handleButtonClick = () => {
        setlist(!list);
    };

    const handleColorClick = (color) => {
        setcolor(color);
        setlist(false);
    };

    useEffect(() => {
        if (color) {
            document.body.style.backgroundColor = color;
        } 
        else {
            document.body.style.backgroundColor = '';
        }
        return () => { document.body.style.backgroundColor = '';};
    }, [color]);

    return (
        <div>
            <button onClick={handleButtonClick}>Pick a color</button>
            {list && (
                <div className="list">
                    {colors.map((color, index) => (
                        <div key={index} className="pick-list" style={{ background: color }} onClick={() => handleColorClick(color)} ></div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ColorPicker;
