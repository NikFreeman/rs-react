import { useEffect, useRef, useState } from 'react';

interface SearchProps {
  onSubmit: (value: string) => void;
}

function Search(props: SearchProps) {
  const [value, setValue] = useState('');
  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    const valueLocal = localStorage.getItem('value');
    if (valueLocal) {
      setValue(valueLocal);
    }
    return () => {
      localStorage.setItem('value', valueRef.current);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit(value);
  };
  return (
    <div className="mx-auto flex max-w-5xl justify-center">
      <form className="my-5 " onSubmit={handleSubmit}>
        <label>
          <input
            className="mx-5 w-72 border-2 px-2 outline-none"
            type="text"
            value={value}
            onChange={handleChange}
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
