import { FormEvent, useState } from 'react';

import { useSelector } from './../store/index';
import { useDispatch } from 'react-redux';
import { saveValue } from '../store/search-value';

function Search() {
  const value = useSelector((state) => state.searchValue);
  const [inputValue, setInputValue] = useState(value);

  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
    dispatch(saveValue(inputValue));
  };
  return (
    <div className="mx-auto flex max-w-5xl justify-center">
      <form className="my-5 " onSubmit={handleSubmit}>
        <label>
          <input
            className="mx-5 w-72 border-2 px-2 outline-none"
            type="text"
            value={inputValue}
            placeholder="Search photo"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <input
          type="submit"
          value="Search"
          className="w-36 rounded  border-2 font-normal text-orange-700 hover:bg-blue-400 hover:text-slate-100"
        />
      </form>
    </div>
  );
}

export default Search;
