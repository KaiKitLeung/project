import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-nav d-flex flex-row">
          <a className="navbar-brand" href="/project/">Welcome</a>

          <Link className="nav-link px-2" to="/project/project">Project</Link>
          <Link className="nav-link px-2" to="/project/about">About</Link>
          <Link className="nav-link px-2" to="/project/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
