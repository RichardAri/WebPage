import React,{useEffect,useState} from 'react';
import './App.css';
import {AddUserComponent} from './components/AddUserComponent';
import {UserComponent} from "./components/UserComponent"

const App = () => {

  const baseUrl = "https://jsonplaceholder.typicode.com/"

  const [usuarios,setUsuarios] = useState([]); // almacenamos en un array

  useEffect(()=> {
    fetchData();
    console.log(usuarios);
  },[])

  const fetchData = async () =>{
    await fetch(`${baseUrl}users`)
    .then(users => users.json())
    .then(data => setUsuarios(data))
    .catch(error => console.log(error));
  }

  const agregarData = async (name,email ) => {
    await fetch(`${baseUrl}users`,{
      method: `POST`,
      body: JSON.stringify({
        name,
        email
      }),
      headers: {
        "Content-type" : "application/Json; charset=UTF-8",
      },
    })
    .then((response) => {
      if (response.status !== 201){
        console.log("No se pudo insertar el usuario");
      }else{
        return response.json();
      }
    }).then((datos)=>{
      setUsuarios(usuario => [...usuario,datos]);
    }).catch((error => console.error(error)));
  }


  return(
    <>
    <h2>REACT CRUD</h2>
    <br/>
    <AddUserComponent addUser={agregarData}/>
    <br/>
    <table>
      <thead>
        <th>Id</th>
        <th>Nombre</th>
        <th>Email</th>
      </thead>
      <tbody>
      {
        usuarios.map(user => (
          <UserComponent 
            id={user.id} n
            name={user.name} 
            email={user.email} 
            key={user.id} />
         ) )
      }
      </tbody>
    </table>
    
    </>
  );
}

export default App;
