import React from "react";

import UserList from "../components/UsersList";

function Users(){
    const USERS =[
    {
    id:'u1',
    name:'me',
    image:'https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/egyptian-pyramid,-egyptian-pyramids-facts,-egyptian-pyramid-inside.jpg',
    places:1
    }];
    return(
        <>
        <UserList items={USERS}/>
        </>
    )
}

export default Users;  