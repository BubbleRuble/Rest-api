import { Component } from 'react';
import './index.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Todo from './Components/Todo/Todo';
import SignupForm from './Components/SignupForm/SignupForm';
import ColorPicker from './Components/ColorPicker/ColorPicker';
import Counter from './Components/Counter/Counter';
import Clock from './Components/Clock/Clock';
import PokemonView from './views/PokemonView';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D89' },
  { label: 'pink', color: '#E91E64' },
  { label: 'indigo', color: '#3F51B5' },
];

function App() {
  return (
  <div className='container'>
    <BrowserRouter>
      <nav>
        <NavLink to="/form">Форма</NavLink>{" | "}
        <NavLink to="/color">Колорпікер</NavLink>{" | "}
        <NavLink to="/counter">Лічильник</NavLink>{" | "}
        <NavLink to="/clock">Годинник</NavLink>{" | "}
        <NavLink to="/pokemon">Покемони</NavLink>{" | "}
      </nav>

      <hr />

      <Routes>
        <Route path="/form" element={<SignupForm />} />
        <Route path="/color" element={<ColorPicker options={colorPickerOptions}/>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/pokemon" element={<PokemonView />} />
      </Routes>
    </BrowserRouter>

  </div>
  )
}

export default App;
