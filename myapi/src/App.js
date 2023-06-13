//Importation du composant UserList
import UserList from './Composant/UserList'
//Création de la fonction du composant App
const App = () => {
  return (
    <div style={{marginTop: "50px", boxSizing:"border-box", borderBlockStyle:"double", backgroundImage: "linear-gradient(pink,lightblue)", padding:"30px",fontsize: "20px", color:"#4a54f1", textAlign:"center"}}>
      <UserList/>
    </div>
  )
}
//Exportation du composant App
export default App

