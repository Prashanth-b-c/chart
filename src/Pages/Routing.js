import { Outlet, Link } from 'react-router-dom'

const Routing = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/routing">Routing</Link>
          </li>
        </ul>
      </nav>

      
    </>
  )
};

export default Routing;