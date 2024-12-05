import React from 'react';

export default function TopMenu() {
  return (
    <div className="header-top-menu">

      <ul className="">
        <li>
          <a className="" href="https://rc.israelcart.com/producers/"  >
            Producers </a>
        </li>
        <li>
          <a className="" href="https://rc.israelcart.com/about-us/"  >
            About us </a>
        </li>
        <li>
          <a className="" href="https://rc.israelcart.com/blog/"  >
            Blog </a>
        </li>
        <li>
          <a className="" href="https://rc.israelcart.com/recipes/"  >
            Recipes </a>
        </li>
        <li>
          <a className="" href="https://rc.israelcart.com/faq/"  >
            FAQ </a>
        </li>
        <li>
          <a className="favorites" href="https://rc.israelcart.com/my-account/favorites/" 
             >
            Lists </a>
        </li>
        <li>
          <a className="account out" href="https://rc.israelcart.com/my-account/" 
             >
            <div className="icon">
              <i className="lh-icon-user-circle-light"></i>
            </div>
            <div className="text">
              Sign In
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
