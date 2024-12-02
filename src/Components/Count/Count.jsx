import React, { useEffect, useState } from "react";
import Affichage from "../Affichage/Affichage";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Counter</h1>
      <Affichage fromage={150} />
      <Affichage fromage={count} />
      <button onClick={Increment}>Increment</button>
      {count > 0 && <button onClick={Decrement}>Decrement</button>}
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default Count;
