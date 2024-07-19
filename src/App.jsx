import React from 'react';
import './App.css';
import Employee from './Employee.jsx';

const employee = { name: 'Militant', phone: '9600944799', address: 'Riot Nagar', email: 'militantVlr@gmail.com' };

const App = () => {
  return (
    <div className="App">
      <Employee employee={employee} />
    </div>
  );
};

export default App;