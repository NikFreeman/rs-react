import { useLocation } from 'react-router-dom';
import Header from './header';

function HeaderWithRoute() {
  const location = useLocation();
  return <Header location={location} />;
}

export default HeaderWithRoute;
