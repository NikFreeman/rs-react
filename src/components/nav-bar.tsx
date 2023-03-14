import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <ol className="flex mx-2 px-4">
        <li className="px-4">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ol>
    </div>
  );
}
