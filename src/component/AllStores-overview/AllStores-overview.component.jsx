import React from "react";

import BigSelectionStoreList from "../stores-list/bigselection-grocers/bigselection-storelist/bigselection-storelist.component";
import BulkStoresList from "../stores-list/bulk/bulk-stores-list/bulk-stores-list.component";
import NewOnInstacartList from '../stores-list/new-on-Instacart/newon-instacart-list/newon-instacart-list.component';
import BestStoresList from "../stores-list/best/best-stores-list/best-stores-list.component";
import RetailStoresList from "../stores-list/retail/retail-stores-list/retail-stores-list.component";
import NeighborhoodStoresList from "../stores-list/neighborhood-favorites/neighborhood-favorites-stores-list/neighborhood-stores-list.component";
import ConvenienceStoresList from "../stores-list/convenience/convenience-stores-list/convenience-stores-list.component";
import WineStoresList from "../stores-list/wine-beer/wine-stores-list/wine-stores-list.component";
import OrganicStoresList from '../stores-list/natural-organic/organic-stores-list/organic-stores-list.component';
import PickupStoresList from "../stores-list/pickup-option/pickup-stores-list/pickup-stores-list.component";
import DrugStoresList from '../stores-list/drug/drug-stores-list/drug-stores-list.component';
import PetStoresList from '../stores-list/pet-supplies/pet-stores-list/pet-stores-list.component';
import MoreStoresList from '../stores-list/more/more-stores-list/more-stores-list.component'; 

const AllStoresOverview = () => {
  
    return(
        <div className="flex-col w-full ml-16">
            <BigSelectionStoreList />
            <NewOnInstacartList />
            <BulkStoresList />
            <BestStoresList />
            <RetailStoresList />
            <NeighborhoodStoresList />
            <ConvenienceStoresList />
            <WineStoresList />
            <OrganicStoresList />
            <PickupStoresList />
            <DrugStoresList />
            <PetStoresList />
            <MoreStoresList />
            
        </div>
    )
};

export default AllStoresOverview;