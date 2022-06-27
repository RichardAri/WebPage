import React from "react";

export const UserComponent = ({id,email,name}) => {
    console.log(email);
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
        </tr>

    )

}