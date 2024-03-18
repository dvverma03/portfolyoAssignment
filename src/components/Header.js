import { Fragment, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menus = () => (
    <Fragment>
      <ul>
        <li className="current">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="nav-btn">
        <a href="#contact" className="btn primary-btn">
          Hire Me
        </a>
      </div>
    </Fragment>
  );
  return (
    <Fragment>
      <header className="header desktop-menu">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="brand-name-toggle d-flex align-items-center justify-content-between">
              {/* Logo */}
              <div className="brand-name">
                <a href="#home">
                  <img src="images/logo.png" alt="brand_logo" />
                </a>
              </div>
            </div>
            {/* Nav */}
            <nav className="nav">{menus()}</nav>
          </div>
        </div>
      </header>
      <header className={`header mobileNav `}>
        <div className={`container ${toggle ? "active" : ""}`}>
          <div className="row justify-content-between align-items-center">
            <div className="brand-name-toggle d-flex align-items-center justify-content-between">
              {/* Logo */}
              <div className="brand-name">
                <a href="#home">
                  <img src="images/logo.png" alt="brand_logo" />
                </a>
              </div>
              {/* Toggle */}
              <div className="toggle" onClick={() => setToggle(!toggle)}>
                <span />
                <span />
                <span />
              </div>
            </div>
            {/* Nav */}
            <nav className="nav" style={{ display: toggle ? "block" : "none" }}>
              {menus()}
            </nav>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
