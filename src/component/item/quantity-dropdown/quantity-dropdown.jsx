import React, { useState } from "react";
import './quantity-dropdown.styles.scss';
import { FaCaretDown } from 'react-icons/fa';

const QuantityDropdown = ({ selected, setSelected }) => {

    const [active, setActive] = useState(false);
    
    const options = ['1', '2', '3', '4', '5', '6', '7', 8]
    return (
        <div className="prefer">
            <div className="dropdown">
                <div className="dropdown-btn" onClick={() => { setActive(!active) }}>
                    <div className="count">
                        {selected}
                        <FaCaretDown className="arrow" />
                    </div>

                </div>
                {active &&
                    (<div className="drop-content">
                        {options.map((option) => (
                            <div className="dropped-item" onClick={() => { setSelected(option); setActive(false) }}>
                                {option}
                            </div>
                        ))}
                    </div>)
                }
            </div>
        </div >
    );
};
export default QuantityDropdown;











