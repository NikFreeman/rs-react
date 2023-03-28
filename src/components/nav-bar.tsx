import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <ol className="mx-2 flex gap-2 px-4">
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
