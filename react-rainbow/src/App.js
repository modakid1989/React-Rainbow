// import logo from './logo.svg';

// Importing the necessary components and styling
import './App.css';
import React, { useState } from 'react'
import ColorForm from './ColorForm'
import ColorBlock from './ColorBlock'

// Define the main App component
function App() {
  // Define a state variable called "colors" using the useState hook, and initialize it with an array of colors
  const [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])

  // Use the "map" method to create an array of ColorBlock components, one for each color in the "colors" array
  const colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color}/>
    )
  })

  // Define a function called "addColor" that takes a new color as its argument and adds it to the "colors" array using the "setColors" function
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  // Render the ColorBlock components and the ColorForm component inside a div with the "App" class
  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor}/> 
    </div>
  );
}

// Export the App component so it can be used in other parts of the application
export default App;
