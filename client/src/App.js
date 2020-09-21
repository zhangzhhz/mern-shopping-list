import React from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='app'>
      <AppNavbar className="App">
        <h1>Hello</h1>
      </AppNavbar>
      <ShoppingList />
    </div>
  );
}

export default App;
