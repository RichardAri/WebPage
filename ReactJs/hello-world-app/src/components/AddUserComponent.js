import React from "react";

export const AddUserComponent = ({addUser}) => {

    const agregarUsuario = (e)=>{
        e.preventDefault();
        addUser(e.target.name.value,e.target.email.value);
        e.target.name.value = "";
        e.target.email.value ="";
    }

    return (
        <div>
        <form >
            <h3>Añadir un nuevo Usuario</h3>
                <input type="text" name="nombre"/>
                <input type="text" name="email"/>
                <button type="submit" onSubmit={agregarUsuario}>Agregar</button>
                <hr/>
            </form>
        </div>
    );
};

export default AddUserComponent;