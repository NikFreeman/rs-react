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
    return (
      <div>
        <div className="bg-sky-300">
          <div className="max-w-5xl mx-auto ">
            <div className="flex p-2 justify-between items-center">
              <h1 className="text-2xl font-bold text-green-600">
                Current page: {this.props.location.pathname}
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
