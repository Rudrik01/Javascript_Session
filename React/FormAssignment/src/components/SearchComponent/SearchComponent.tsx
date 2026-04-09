import { useState } from "react";
import type { JSX } from "react";
export default function SearchComponent() {
  const [search, setSearch] = useState<string>();
  const paragraph =
    'React is a declarative, component-based front-end VIRTUAL virtual Virtual JavaScript library used for building interactive user interfaces, primarily leveraging JSX syntax to define UI structures. It efficiently updates views by utilizing a Virtual DOM to compute minimal changes—a "diffing" process—before applying updates to the real DOM. By utilizing state management and declarative rendering, React ensures high performance, minimal re-rendering, and code reusability.';
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input type="text" value={search} onChange={handleChange} />
      <br />

      {paragraph.split(" ").reduce((acc, word, index) => {
        if (search && word.toLowerCase().includes(search.toLowerCase())) {
          acc.push(
            <span key={index} style={{ color: "red" }}>
              {word + " "}
            </span>,
          );
        } else {
          acc.push(<span key={index}>{word + " "}</span>);
        }
        return acc; 
      }, [] as JSX.Element[])}
    </>
  );
}
