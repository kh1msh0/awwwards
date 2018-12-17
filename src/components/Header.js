import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="mggkjg">
          Awards
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <div className="nav-link" href="#">
                home <span className="sr-only">(current)</span>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="kjnl">
                bla bla bla
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="kfuf">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
