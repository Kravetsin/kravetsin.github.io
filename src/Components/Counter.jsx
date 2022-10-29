import { useState } from "react"

const Counter = function(){
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  function increment(){
    setCount1(count1 + 1)
  }

  function decrement(){
    setCount2(count2 + 1)
  }

  function reset(){
    setCount1(count1 === 0)
    setCount2(count2 === 0)
  }

  return(
    <div className="col">
      <h1>{count1} Likes</h1>
      <h1>{count2} Dislikes</h1>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter;