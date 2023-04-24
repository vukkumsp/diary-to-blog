import React from 'react';

import './header.css';

function Header() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h4>Diary to Blog</h4>
        </a>
      </div>
    </div>
  );
}

export default Header;