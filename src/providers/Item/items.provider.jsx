import React, { createContext, useState } from 'react';
import ITEM_DATA from '../../data/Itemdata';

export const ItemContext = createContext ({
   
    lists: [],
    filterItem: () => {},
    AllItem: () => {},
   
});

const ItemProvider = ({children}) => {

    const [lists,setlists] = useState(ITEM_DATA);
    
    const filterItem = (categItem) => {
        const updatedItems = ITEM_DATA.filter((curElem) => {
            return curElem.category === categItem;
        })
        setlists(updatedItems);
    }

    const AllItem = () => {
        setlists(ITEM_DATA);
    }

    return (
        <ItemContext.Provider
        value={{ 
          lists,
          filterItem,
          AllItem
        }}
        >
         {children}
        </ItemContext.Provider>
    );

};

export default ItemProvider;