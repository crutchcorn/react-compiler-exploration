import { useState } from "react";
import { addItem, RootState, useAppDispatch } from "./store";
import { connect } from "react-redux";

function mapStateToProps(state: RootState) {
  return {
    items: state.test.items,
  };
}

function App({ items }: ReturnType<typeof mapStateToProps>) {
  const [count, setCount] = useState(0);

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

export default connect(mapStateToProps)(App);
