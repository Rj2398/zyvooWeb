import React from "react";
import Header from "../../components/guest/Header";
import AuthModal from "../../components/guest/authModal";
import Footer from "../../components/guest/Footer";
import { Link } from "react-router-dom";

function WishList() {
  return (
    <>
      <Header />

      <main>
        {/* MOBILE */}
        <div className="mob-search-filter border-start-0 border-end-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mob-search-filter-in">
                  <div className="mob-search-in">
                    <ul>
                      <li>
                        <a href="mob-src-filter.html">Where</a>
                      </li>
                      <li>
                        <a
                          className="mob-search-in-time"
                          href="mob-src-filter.html"
                        >
                          Time
                        </a>
                      </li>
                      <li>
                        <a href="mob-src-filter.html">Activity</a>
                      </li>
                    </ul>
                    <a href="mob-src-filter.html" className="mob-search-button">
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </a>
                  </div>
                  <div className="mob-filter-in">
                    <a href="mob-filter.html">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/mobile/filters/filter.svg"
                        alt="filter icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* WISHLIST-PAGE */}
        <div className="notifications-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="notifications-in">
                  <h2>
                    Wishlist <button type="button">Edit</button>
                  </h2>
                </div>
              </div>
              {[1, 2, 3, 4].map((item, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div className="explore-guides-articles-in">
                    <button type="button" hidden={index !== 0}>
                      <i className="fa-regular fa-xmark"></i>
                    </button>
                    <Link to="/wishlistDetails">
                      <div className="explore-guides-articles-image">
                        <img
                          src={`https://design.yilstaging.com/ZYVO/assets/images/locations-grid/${
                            index + 1
                          }.svg`}
                          alt="Wishlist Item"
                        />
                      </div>
                      <h3>
                        {
                          [
                            "Sea view",
                            "Cabin in Peshastin",
                            "Near to mountains",
                            "Sea view",
                          ][index]
                        }
                      </h3>
                      <p>4 saved</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <AuthModal />
      <Footer />
    </>
  );
}

export default WishList;
