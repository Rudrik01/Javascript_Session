/*
5. **Class → function**
    
  Below is a working class component in the **classic** style: `constructor(props)`, `super(props)`, `this.state` in the constructor, and a bound method for the event handler. You’ll see this pattern in older codebases. Add it to your sandbox, run it, then **rewrite it as a function component** using `useState` and `useEffect` (with cleanup where needed).
*/

import { useEffect, useState } from "react";

export default function Assignment5() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div>Excercise - 5</div>
      <div>
        <p>
          Window width: <strong>{width}px</strong>
        </p>
        <small>
          Resize the window to see it update. Unmount to remove the listener.
        </small>
      </div>
    </>
  );
}
