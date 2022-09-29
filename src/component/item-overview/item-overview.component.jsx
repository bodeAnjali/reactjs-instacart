import React,{ useContext } from "react";
import ItemPreview from "../item-preview/item-preview.component";
import { ItemContext } from "../../providers/Item/items.provider";

const ItemOverview = () => {

    const { lists } = useContext(ItemContext)

    return (
        <div className="flex-col w-[86%] mt-16 ml-64">
            {
                lists.map((list) => <ItemPreview key={list.id} list={list} />)
            }
        </div>
    )
};

export default ItemOverview;