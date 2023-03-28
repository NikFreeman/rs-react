import { Component } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './nav-bar';

export interface LocationProps {
  location: ReturnType<typeof useLocation>;
}
class Header extends Component<LocationProps> {
  constructor(props: LocationProps) {
    super(props);
  }
  render() {
    const pageTitle = new Map();
    pageTitle.set('/', 'Main Page');
    pageTitle.set('/about', 'About Page');
    pageTitle.set('/form', 'Form Page');
    return (
      <div>
        <div className="bg-sky-300">
          <div className="mx-auto max-w-5xl ">
            <div className="flex items-center justify-between p-2">
              <h1 className="text-2xl font-bold text-green-600">
                Current page: {pageTitle.get(this.props.location.pathname)}
              </h1>
              <NavBar />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    );
  }
}

export default Header;
