import { useRef, useState } from "react";

export default function SearchableList({ items, itemKeyfn, children }) {
  const lastChange = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  const searchRes = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(searchRes);

  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }
    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(event.target.value);
    }, 500);
  }
  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchRes.map((item) => (
          <li key={itemKeyfn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
