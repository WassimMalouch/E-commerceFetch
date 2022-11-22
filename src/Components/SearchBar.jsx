import './searchbar.css'

const SearchBar = ({filter,handleChange}) => {
  return (
    <div
      style={{
        padding: "5px",
        marginRight:"10px",
      }}
    >
      <input
        className='inputSearch'
        placeholder="Type something here"
        value={filter}
        onChange={handleChange}
      ></input>     
    </div>
  );
};

export default SearchBar;
