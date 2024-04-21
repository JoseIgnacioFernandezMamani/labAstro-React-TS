import React, { useState } from "react";
import '../components/Button.css'

const Button = (props) => {
  const [count, setCount] = useState(0);
  function handlerButton() {
    setCount(count + 5);
  }

  return (
    <div class="parent-box">
      <button onClick={handlerButton} class="children-element">
        {count}
      </button>
      <div class="children-element">{count}</div>
    </div>
  );
};

export default Button;
