import React from "react";

import './UserItem'
import UserItem from "./UserItem";
import './UsersList.css';

function UserList(props){
    if (props.items.length === 0){
        return(
            <div className="center">
                <h2>No users found</h2>
            </div>
        )
    }

    return(
        <ul className="user-list">
            {props.items.map(user =>(
                <UserItem
                key={user.id}
                id={user.id}
                name={user.name}
                image={user.image}
                placeCount={user.places}
                />
            ))}
        </ul>
    )
    
}

export default UserList;