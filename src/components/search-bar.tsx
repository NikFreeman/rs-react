import React from 'react';

class SearchBar extends React.Component {
    
  render() {
    return (
      <div className="max-w-5xl mx-auto my-5 ">
        <input
          className="border mx-5 w-96
          "
          type="text"
        />
        <button className="rounded w-36 border hover:bg-slate-700 hover:text-slate-100">
          Search
        </button>
      </div>
    );
  }
}
export default SearchBar;
