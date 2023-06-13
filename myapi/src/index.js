//Importation du React
import React from 'react';
//Importation du react dom
import ReactDOM from 'react-dom/client';
//Importation du fichier css 
import './index.css';
//Importation du composant App
import App from './App';
//Importation de reportWebVitals qui mesure la performance de l'application
import reportWebVitals from './reportWebVitals';
//Création de la variable root qui prend l'élément récupéré du DOM 
const root = ReactDOM.createRoot(document.getElementById('root'));
//App rendering
root.render(
// Appel du composant App en utilisant StrictMode pour faire les vérifications nécessaires
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
