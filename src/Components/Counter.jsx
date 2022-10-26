import { useState } from "react"

const Counter = function(){
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count + 1)
  }

  function decrement(){
    setCount(count - 1)
  }

  return(
    <div className="col">
      <h1>{count}</h1>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
    </div>
  )
}

export default Counter;