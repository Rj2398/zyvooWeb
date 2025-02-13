import React, { useState } from "react";
import HomeHeader from "../../components/guest/HomeHeader";
import Footer from "../../components/guest/Footer";

import HeaderFilter from "../../components/guest/HeaderFilter";
import { Link } from "react-router-dom";

import Header from "../../components/host/Header";

const Home = () => {
  const [userType, setUsertype] = useState("guest");

  return (
    <>
      {/* <Header /> */}
      <HomeHeader />
      <HeaderFilter />
      <main>
        {/* <!-- TOP-FILTERS-SECTION -->
  <!-- DESKTOP-&-TABLET --> */}
        <div className="top-filter-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <div className="top-filter-inner">
                  <ul>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/filters/location.svg"
                        alt=""
                      />
                      <p>New York, US</p>
                      <button type="button">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </li>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/filters/calendar-icon.svg"
                        alt=""
                      />
                      <p>October 22, 2023</p>
                      <button type="button">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </li>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/filters/time.svg"
                        alt=""
                      />
                      <p>2 hours</p>
                      <button type="button">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </li>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/filters/price.svg"
                        alt=""
                      />
                      <p>$10 - $25</p>
                      <button type="button">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="top-filter-inner">
                  <div className="top-filter-inner-btns">
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#filters-popup"
                    >
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/filters/filters.svg"
                        alt=""
                      />
                      Filters
                    </a>
                    <a href="javascript:void(0);" className="active">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/filters/show-map.svg"
                        alt=""
                      />
                      Show map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- DESKTOP-&-TABLET -->
  <!-- MOBILE --> */}
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
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- MOBILE -->
  <!-- TOP-FILTERS-SECTION -->

  <!-- LOCATION-GRID-&-MAP-SECTION --> */}
        <div className="location-grid-map-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="location-grid-map-in">
                  <div className="location-grid-wrap">
                    {/* <!-- 1-LINE -->
              <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          <h3>
                            <i className="fa-solid fa-bolt"></i> Instant book
                          </h3>
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/1.png"
                              alt=""
                            />
                            <span className="carousel-profile-batch"></span>
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
              <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-2"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          {/* <!-- <h3><i className="fa-solid fa-bolt"></i> Instant book</h3> --> */}
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-2"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-2"
                            data-bs-slide-to="1"
                            className="active"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-2"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-2"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-2"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-2"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/2.png"
                              alt=""
                            />
                            <span className="carousel-profile-batch"></span>
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
              <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-3"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          <h3>
                            <i className="fa-solid fa-bolt"></i> Instant book
                          </h3>
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-3"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-3"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-3"
                            data-bs-slide-to="2"
                            className="active"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-3"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-3"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-3"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/3.png"
                              alt=""
                            />
                            {/* <!-- <span className="carousel-profile-batch"></span> --> */}
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
              <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-4"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          {/* <!-- <h3><i className="fa-solid fa-bolt"></i> Instant book</h3> --> */}
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-4"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-4"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-4"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-4"
                            data-bs-slide-to="3"
                            className="active"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-4"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-4"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/2.png"
                              alt=""
                            />
                            {/* <!-- <span className="carousel-profile-batch"></span> --> */}
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
              <!-- 1-LINE -->
              <!-- 2-LINE -->
              <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-5"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          <h3>
                            <i className="fa-solid fa-bolt"></i> Instant book
                          </h3>
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-5"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-5"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-5"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-5"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-5"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-5"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/1.png"
                              alt=""
                            />
                            <span className="carousel-profile-batch"></span>
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
              <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-6"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          {/* <!-- <h3><i className="fa-solid fa-bolt"></i> Instant book</h3> --> */}
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-6"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-6"
                            data-bs-slide-to="1"
                            className="active"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-6"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-6"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-6"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-6"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/2.png"
                              alt=""
                            />
                            <span className="carousel-profile-batch"></span>
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM --> */}
                    {/* <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-7"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          <h3>
                            <i className="fa-solid fa-bolt"></i> Instant book
                          </h3>
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-7"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-7"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-7"
                            data-bs-slide-to="2"
                            className="active"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-7"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-7"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-7"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/3.png"
                              alt=""
                            />
                            {/* <!-- <span className="carousel-profile-batch"></span> --> */}
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
              <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-8"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          {/* <!-- <h3><i className="fa-solid fa-bolt"></i> Instant book</h3> --> */}
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-8"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-8"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-8"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-8"
                            data-bs-slide-to="3"
                            className="active"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-8"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-8"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/2.png"
                              alt=""
                            />
                            {/* <!-- <span className="carousel-profile-batch"></span> --> */}
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
              <!-- 2-LINE -->
              <!-- 3-LINE -->
              <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-9"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          <h3>
                            <i className="fa-solid fa-bolt"></i> Instant book
                          </h3>
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-9"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-9"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-9"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-9"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-9"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-9"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/1.png"
                              alt=""
                            />
                            <span className="carousel-profile-batch"></span>
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
              <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-10"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          {/* <!-- <h3><i className="fa-solid fa-bolt"></i> Instant book</h3> --> */}
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-10"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-10"
                            data-bs-slide-to="1"
                            className="active"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-10"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-10"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-10"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-10"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/2.png"
                              alt=""
                            />
                            <span className="carousel-profile-batch"></span>
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
              <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-11"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          <h3>
                            <i className="fa-solid fa-bolt"></i> Instant book
                          </h3>
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-11"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-11"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-11"
                            data-bs-slide-to="2"
                            className="active"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-11"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-11"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-11"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/3.png"
                              alt=""
                            />
                            {/* <!-- <span className="carousel-profile-batch"></span> --> */}
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
              <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-12"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          {/* <!-- <h3><i className="fa-solid fa-bolt"></i> Instant book</h3> --> */}
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-12"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-12"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-12"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-12"
                            data-bs-slide-to="3"
                            className="active"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-12"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-12"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/2.png"
                              alt=""
                            />
                            {/* <!-- <span className="carousel-profile-batch"></span> --> */}
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
              <!-- 3-LINE -->
              <!-- 4-LINE -->
              <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-13"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          <h3>
                            <i className="fa-solid fa-bolt"></i> Instant book
                          </h3>
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-13"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-13"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-13"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-13"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-13"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-13"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/1.png"
                              alt=""
                            />
                            <span className="carousel-profile-batch"></span>
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
              <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-14"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          {/* <!-- <h3><i className="fa-solid fa-bolt"></i> Instant book</h3> --> */}
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-14"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-14"
                            data-bs-slide-to="1"
                            className="active"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-14"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-14"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-14"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-14"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/2.png"
                              alt=""
                            />
                            <span className="carousel-profile-batch"></span>
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
              <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-15"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          <h3>
                            <i className="fa-solid fa-bolt"></i> Instant book
                          </h3>
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-15"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-15"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-15"
                            data-bs-slide-to="2"
                            className="active"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-15"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-15"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-15"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/3.png"
                              alt=""
                            />
                            {/* <!-- <span className="carousel-profile-batch"></span> --> */}
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
              <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-16"
                        className="carousel slide"
                        data-bs-interval="1000000"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          {/* <!-- <h3><i className="fa-solid fa-bolt"></i> Instant book</h3> --> */}
                          <div className="carousel-inner-top-heart">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#add-wishlist"
                            >
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                                alt=""
                                className="active"
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-16"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-16"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-16"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-16"
                            data-bs-slide-to="3"
                            className="active"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <Link to="/location">
                            <div className="carousel-item active">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </Link>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-16"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-16"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner-bottom">
                          <div className="carousel-inner-bottom-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/2.png"
                              alt=""
                            />
                            {/* <!-- <span className="carousel-profile-batch"></span> --> */}
                          </div>
                          <h2>
                            Hosted by Mia <br />{" "}
                            <span>Melbourne Beach, FL, US</span>
                          </h2>
                        </div>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <Link to="/location">Cabin in Peshastin</Link>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
              <!-- 4-LINE --> */}
                  </div>
                  <div className="location-map-wrap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.139268703457!2d-133.14340392403935!3d55.4776704131501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x540e467f9dd315f3%3A0xf4eae0d4d7764524!2s245%20Cold%20Storage%20Rd%2C%20Craig%2C%20AK%2099921%2C%20USA!5e0!3m2!1sen!2sin!4v1723457458145!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      // style="border:0;"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- LOCATION-GRID-&-MAP-SECTION -->
  <!-- PAGINATION-SECTION --> */}
        <div className="home-pagination-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="time-and-pagination">
                  <div className="time-countdown">
                    <button
                      type="button"
                      className="need-more-time-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#need-more-time-popup"
                    >
                      {/* <!-- TIME-COUNTDOWN --> */}
                      <div className="time-countdown-inner desktop-tablet-countdown">
                        <div className="time-countdown-data">
                          <h2>Time Left</h2>
                          <div className="countdown" id="countdown1">
                            <div className="time-section">
                              <div className="hours">00</div>
                              <div className="label">Hour</div>
                            </div>
                            <div className="time-section">
                              <div className="minutes">00</div>
                              <div className="label">Min</div>
                            </div>
                            <div className="time-section">
                              <div className="seconds">00</div>
                              <div className="label">Sec</div>
                            </div>
                          </div>
                        </div>
                        <div id="icon-container">
                          <img
                            id="icon"
                            src="https://design.yilstaging.com/ZYVO/assets/images/time-countdown/timer-logo.svg"
                            alt="Icon"
                          />
                        </div>
                        <img
                          id="countdown-bg"
                          src="https://design.yilstaging.com/ZYVO/assets/images/time-countdown/timer.svg"
                          alt=""
                        />
                      </div>
                      {/* <!-- TIME-COUNTDOWN --> */}
                    </button>
                  </div>
                  <div className="home-pagination-in">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-chevron-left"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="active">
                          1
                        </a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- PAGINATION-SECTION -->
  <!-- MOBILE-TIME-COUNTDOWN --> */}
        <button
          className="need-more-time-btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#need-more-time-popup"
        >
          <div className="time-countdown-inner mobile-countdown">
            <div className="time-countdown-data">
              <h2>Time Left</h2>
              <div className="countdown" id="countdown2">
                <div className="time-section">
                  <div className="hours">00</div>
                  <div className="label">Hour</div>
                </div>
                <div className="time-section">
                  <div className="minutes">00</div>
                  <div className="label">Min</div>
                </div>
                <div className="time-section">
                  <div className="seconds">00</div>
                  <div className="label">Sec</div>
                </div>
              </div>
            </div>
            <div id="icon-container">
              <img
                id="icon"
                src="https://design.yilstaging.com/ZYVO/assets/images/time-countdown/timer-logo.svg"
                alt="Icon"
              />
            </div>
            <img
              id="countdown-bg"
              src="https://design.yilstaging.com/ZYVO/assets/images/time-countdown/timer-mobile.svg"
              alt=""
            />
          </div>
        </button>
        {/* <!-- MOBILE-TIME-COUNTDOWN --> */}
      </main>

      <Footer />
    </>
  );
};

export default Home;
