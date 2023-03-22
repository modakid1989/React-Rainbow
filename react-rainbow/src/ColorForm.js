import React, { useState } from 'react'

function ColorForm(props) {
  // Create a state variable called "input" with an initial value of an empty string
  let [input, setInput] = useState('')

  const isColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
  }

  // This function will be called when the form is submitted
  const handleSubmit = (e) => {
    // We still want to eliminate the default behavior of our form submittal
    e.preventDefault()
    // addColor, the function we just built, should be available within props.
    if (isColor(input)) {
        props.addColor(input)
    }
    setInput('')
  }

  // This component will render a form with an input field and a submit button
  return (
    <div>
      <form onSubmit={handleSubmit}> {/* When the form is submitted, call the handleSubmit function */}
        <input type="text"
          value={input}
          onChange={ (e) => setInput(e.target.value)} // When the input value changes, update the "input" state variable with the new value
        />
        <button className="my-button" type="submit">Submit!</button>
      </form>
    </div>
  )
}

export default ColorForm