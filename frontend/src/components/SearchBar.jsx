// src/components/SearchBar.jsx

function SearchBar({
  value,
  onChange,
}) {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="w-full border p-2 rounded"
    />
  );
}

export default SearchBar;