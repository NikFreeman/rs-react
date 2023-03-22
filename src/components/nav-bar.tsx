import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <ol className="flex mx-2 px-4 gap-2">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/form">Form</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ol>
    </div>
  );
}
