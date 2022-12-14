import React from "react";

import PlaceItem from "./PlaceItem";
import Card from '../../shared/components/UIElements/Card'
import './PlaceList.css'

const PlaceList = props =>{
    if (props.items.length === 0){
        return (
            <div className="place-list-center">
                <Card>
                    <h2>No spots posted. Wanna post a new place?</h2>
                    <button>Post Spot</button>
                </Card>
            </div>
        )
    }

    return(
        <ul className="place-list">
            {props.items.map(place =>
                <PlaceItem
                    key={place.id}
                    id={place.id}
                    image={place.imageUrl}
                    title={place.title}
                    description={place.description}
                    address={place.address }
                    creatorId={place.creator}
                    coordinates={place.location}
                    />
            )} 
        </ul>
    )
}

export default PlaceList;