// Import the necessary component and hooks from React
import React from 'react'

// Define the ColorBlock component, which takes in "props" as its argument
function ColorBlock(props) {
    // Render a div with the "colorBlock" class and a background color set to the value of the "color" prop passed in from the parent component
    return (
        <div className="colorBlock"
            style={{'backgroundColor': props.color}}>
            <p>{props.color}</p> {/* Render the value of the "color" prop in a paragraph element*/}
        </div>
    )
}

// Export the ColorBlock component so it can be used in other parts of the application
export default ColorBlock 