//Importing modules : useEffect and useState
import React,{useEffect,useState} from 'react'
//Importing Axios 
import axios from 'axios'
// Creationg the Function UserList as a component
const UserList = () => {
//Initialisation du variable data
    const[data,setData]=useState([])
    useEffect(()=>{
//Mise à jour de l'état du variablen
axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{setData(response.data)
console.log(response)
})
    },[])
  return (
    <div>
      {data.map((e)=>(<div> name is : {e.name}</div>))}
    </div>
  )
}
// exportation du composant UserList
export default UserList
