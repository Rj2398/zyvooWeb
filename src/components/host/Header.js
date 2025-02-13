import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const images = [
    "/images/Host/home-icon-hostsvg.svg",
    "/images/nav-section/chat.svg",
    "/images/nav-section/wishlist.svg",
  ];

  return (
    <header>
      {/* DESKTOP & TABLET NAV */}
      <div className="nav-wrap">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="images/logo.svg" alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="nav-inner">
                <div className="nav-inner-right ms-auto">
                  <div className="nav-chat-time-wish">
                    {["/myplaces", "/booking-host", "/host-chat"].map(
                      (link, index) => (
                        <div key={index} className="nav-chat-time-wish-in">
                          <span>2</span>
                          <a href={link}>
                            <img
                              src={images[index]}
                              alt={`Icon ${index + 1}`}
                            />
                          </a>
                        </div>
                      )
                    )}
                    <div className="nav-account-in">
                      <div className="nav-account-in-profile">
                        <img
                          src="images/nav-section/user-profile.png"
                          alt="User Profile"
                        />
                      </div>
                      <div className="nav-account-in-list">
                        <form>
                          <button type="submit">Switch to Guest</button>
                        </form>
                        <Link to="/payment-host">Payment History</Link>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#language-popup"
                        >
                          Language
                        </a>
                        <Link to="/notification-host">Notifications</Link>
                        <Link to="/helpCenterHost">Help Center</Link>
                        <Link to="/profile-host">Settings</Link>
                        <Link to="/aboutUs">About Us</Link>
                        <Link
                          to="/"
                          data-bs-target="#logout-popup"
                          data-bs-toggle="modal"
                          onClick={() => navigate("/")}
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* MOBILE NAV */}
      <div className="mob-nav border-start-0 border-end-0">
        <div className="container-fluid">
          <ul>
            <li>
              <a href="My-places.html">
                <img src="images/Host/properties-mobile-icon.png" alt="" />
                Properties
              </a>
            </li>
            <li>
              <span>2</span>
              <a href="chat.html">
                <img src="images/mobile/nav/2.svg" alt="" /> Inbox
              </a>
            </li>
            <li>
              <span className="bookings">1</span>
              <a href="bookings-host.html">
                <img src="images/mobile/nav/3.svg" alt="" /> Bookings
              </a>
            </li>
            <li>
              <a href="profile-host.html" className="active">
                <img src="images/mobile/nav/5.svg" alt="" /> Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
