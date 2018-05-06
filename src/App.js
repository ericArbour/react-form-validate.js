import React, { Component } from 'react';
import ProductForm from './Products/ProductForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Product Administration</h1>
        </header>
        <ProductForm />
      </div>
    );
  }
}

export default App;
