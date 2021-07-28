const SearchBar = ({ searchWord, searchChange }) => {
  return (
    <div>
      <input
        className="search-input"
        type="search"
        placeholder="Search for a patient name"
        value={searchWord}
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBar;
