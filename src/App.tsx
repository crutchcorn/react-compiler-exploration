import { useState } from "react";
import { addItem, useAppDispatch, useAppSelector } from "./store";

function App() {
  const [count, setCount] = useState(0);

  const items = useAppSelector((state) => state.test.items);

  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Count</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment count
      </button>
      <div>{count}</div>
      <h1>Items</h1>
      <button
        onClick={() => {
          dispatch(addItem());
        }}
      >
        Add item
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
