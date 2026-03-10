/*
6. **Self-study hooks (useRef)**
  Add these to your assignment: build at least one small example using **useRef** (e.g. focus an input, or store a value that doesn’t need to trigger re-renders)
*/

import { useRef } from "react";

export default function Assignment6() {
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    if (inputRef != null && inputRef.current != null) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <div>Excercise - 6</div>
      <input type="text" ref={inputRef} name="demo-input" id="demo-input" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}