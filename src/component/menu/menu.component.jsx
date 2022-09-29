import React from "react";

const Menu = ({menu}) => {
    const { icon, name, status } = menu;
    return(
        <div className="flex flex-col w-28 h-[8.5rem] items-center p-4 cursor-pointer">
            <img src={`${icon}`} alt='icon' className="h-[4rem] w-[4rem]" />
            <span className="text-xs font-semibold p-[0.5rem] ">{name}</span>
            <span className="text-teal-300 text-xs font-bold">{status}</span>
        </div>
    )
};

export default Menu;