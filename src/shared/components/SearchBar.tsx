import { useState, useEffect } from "react";
interface Props {
  placeholder?: string;

  onQuery: (query: string) => void;
}

export const SearchBar = ({
  placeholder = "Buscar gifs...",
  onQuery,
}: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 750);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    setQuery("");
  };

  return (
    <div className="search-container">
      <h1>{query}</h1>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={({ target }: { target: HTMLInputElement }) =>
          setQuery(target.value)
        }
        onKeyDown={({ key }: { key: string }) => {
          if (key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
