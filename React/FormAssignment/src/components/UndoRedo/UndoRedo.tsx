import { useState, useMemo, useEffect } from "react";

function debounce(fn: (...args: unknown[]) => void, delay: number) {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
export default function UndoRedo() {
  const [ip, setIp] = useState<string>("");
  const [stack, setStack] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(-1);
  const handleStackChange = (value: string) => {
    setStack((prev) => {
      const newStack = [...prev, value];
      setIndex(newStack.length-1);
      return newStack;
    });
  };

  const debouncedStackChange = useMemo(
    () => debounce((val: unknown) => handleStackChange(val as string), 1000),
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIp(e.target.value);
    debouncedStackChange(e.target.value);
  };
  useEffect(() => {
    console.log(stack);
   console.log(index);
  }, [stack,index]);

  const handleUndo = () => {
  if (index <= -1) return 

  const newIndex = index - 1
  setIndex(newIndex)

  if (newIndex === -1) {
    setIp('')  
  } else {
    setIp(stack[newIndex])  
  }
}

  const handleRedo = () => {
  if (index >= stack.length - 1) return 

  const newIndex = index + 1
  setIndex(newIndex)
  setIp(stack[newIndex])
}
  return (
    <>
      <input type="text" value={ip} onChange={handleChange} />
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      {ip}
    </>
  );
}
