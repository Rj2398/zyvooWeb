import React from "react";
import Header from "../../../components/guest/Header";
import Footer from "../../../components/guest/Footer";
import { Link } from "react-router-dom";
import AuthModal from "../../../components/guest/authModal";

function ArticalDetails() {
  return (
    <div>
      <Header />
      <main>
        {/* MOBILE */}
        <div className="mob-search-filter border-start-0 border-end-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mob-search-filter-in">
                  <div className="mob-search-bar-back">
                    <a href="explore-articles.html">
                      <i className="fa-regular fa-arrow-left"></i>
                    </a>
                    <form action="">
                      <label>
                        <input type="text" placeholder="Search..." />
                        <button type="submit">
                          <i className="fa-regular fa-magnifying-glass"></i>
                        </button>
                      </label>
                    </form>
                  </div>
                  <div className="mob-filter-in">
                    <a href="mob-filter.html">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/mobile/filters/filter.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MOBILE */}

        {/* GUIDES-ARTICLES-DETAILS-PAGE */}
        <div className="guides-articles-details">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-md-6">
                <div className="guides-articles-left">
                  <div className="guides-articles-left-top">
                    <div className="guides-articles-left-top-data">
                      <p>RANKING</p>
                      <h1>Post title article title name article blog</h1>
                      <ul>
                        <li>
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/date.svg"
                            alt=""
                          />
                          Mar 13, 2022
                        </li>
                        <li>
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/time.svg"
                            alt=""
                          />
                          3 min read
                        </li>
                      </ul>
                    </div>
                    <div className="guides-articles-left-top-image">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/1.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="guides-articles-left-mid">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <hr />
                    <h3>Introducing Reader. A Stunning Experience</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/2.svg"
                      alt=""
                    />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div className="guides-articles-left-bottom">
                    <div className="guides-articles-left-bottom-in">
                      <span>
                        <h4>Author:</h4>
                        <p>
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/user.svg"
                            alt=""
                          />{" "}
                          Username
                        </p>
                      </span>
                    </div>
                    <div className="guides-articles-left-bottom-in">
                      <h4>Share This Article:</h4>
                      <a
                        href="javascript:void(0);"
                        data-bs-target="#share-popup"
                        data-bs-toggle="modal"
                      >
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/share.svg"
                          alt=""
                        />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="guides-articles-right">
                  <form action="">
                    <label>
                      <input type="text" placeholder="Search article..." />
                      <button type="button">
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </button>
                    </label>
                  </form>
                  <div className="guides-articles-chart">
                    <div className="guides-articles-chart-top">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/chart.svg"
                        alt=""
                      />
                    </div>
                    <h2>
                      <a href="articles-detail.html">
                        A Guide to analyses dashboard data
                      </a>
                    </h2>
                    <ul>
                      <li>
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/date.svg"
                          alt=""
                        />
                        Mar 13, 2022
                      </li>
                      <li>
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/time.svg"
                          alt=""
                        />
                        3 min read
                      </li>
                    </ul>
                  </div>
                  <div className="guides-articles-videos">
                    <div className="guides-articles-videos-in">
                      <a href="" className="play-btn">
                        <i className="fa-solid fa-circle-play"></i>
                      </a>
                      <h2>
                        <a href="articles-detail.html">
                          A Guide to analyses dashboard data
                        </a>
                      </h2>
                      <ul>
                        <li>
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/date.svg"
                            alt=""
                          />
                          Mar 13, 2022
                        </li>
                        <li>
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/time.svg"
                            alt=""
                          />
                          3 min read
                        </li>
                      </ul>
                    </div>
                    <div className="guides-articles-videos-in">
                      <a href="" className="play-btn">
                        <i className="fa-solid fa-circle-play"></i>
                      </a>
                      <h2>
                        <Link href="/explore-articles">
                          A Guide to analyses dashboard data
                        </Link>
                      </h2>
                      <ul>
                        <li>
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/date.svg"
                            alt=""
                          />
                          Mar 13, 2022
                        </li>
                        <li>
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/time.svg"
                            alt=""
                          />
                          3 min read
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* GUIDES-ARTICLES-DETAILS-PAGE */}
      </main>
      <AuthModal />
      <Footer />
    </div>
  );
}

export default ArticalDetails;
