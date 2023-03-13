import React from 'react'

const Count = () => {
  let useState;


  const [count, setCount] = useState(0);


  const incre = () => {
    setCount(count + 1);
  }

  const decre = () => {
    setCount(count - 1);
  }
  return [count, incre, decre];
}

export default Count
