import React from 'react';
import './App.css';
import { TextField } from './TextField';

function App() {
  return (
    <div className="App">
      <h1>Hello Word</h1>
      <TextField text={'It is a beautiful day'} person={{firstName:'Bryan', lastName:'Smith'}}/>
    </div>
  );
}

export default App;
