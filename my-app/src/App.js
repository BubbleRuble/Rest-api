import { Component } from 'react';
import Todo from './Components/Todo/Todo';
import SignupForm from './Components/SignupForm/SignupForm';
import ColorPicker from './Components/ColorPicker/ColorPicker';
import Counter from './Components/Counter/Counter';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D89' },
//   { label: 'pink', color: '#E91E64' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

function App() {
  return (
  <div>
    <SignupForm />
    {/* <ColorPicker options={colorPickerOptions}/> */}
    {/* <Counter /> */}
  </div>
  )
}

export default App;
