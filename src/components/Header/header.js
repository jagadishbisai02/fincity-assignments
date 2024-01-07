import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

const NavBar = () => {
  return (
    <>
      <div className="header navbar-fixed">
        <div className="container">
          <div className="row">
            <nav className="header-content">
              <a href="/">
                <h3>Madelyn Torff</h3>
              </a>
              <ul className="pages-list">
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Projects">Projects</a>
                </li>
                <li>
                  <a href="#Contacts">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
