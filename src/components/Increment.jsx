import React from 'react'

const Increment = ({count, onclickHandler}) => {
    const IncreaseHandler = () => onclickHandler();

  return (
    <div>
        <p> {count} </p>
        <button onClick={IncreaseHandler}>Increase</button>
    </div>
  )
}

export default Comp1