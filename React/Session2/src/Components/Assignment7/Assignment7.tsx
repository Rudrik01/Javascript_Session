/*
7. **Self-study hooks (useRef)**
  one using useReducer (e.g. a simple counter or form with multiple fields). See the Self-study: more hooks section above for a short description of each.
*/

import { useReducer } from "react";

function reducer(
  state: { count: number },
  action: { type: "INCREMENT" | "DECREMENT" },
) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default function Excercise7() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div>Excercise - 7</div>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </>
  );
}