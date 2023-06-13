//Importation du render et screen 
import { render, screen } from '@testing-library/react';
//Importation du composant App
import App from './App';
//Définition du test
test('renders learn react link', () => {
//Rendering of the App component   
  render(<App />);
//Recherche d'un élément avec le texte learn react  
  const linkElement = screen.getByText(/learn react/i);
//Assurer que l'élement est dans le document
  expect(linkElement).toBeInTheDocument();
});
