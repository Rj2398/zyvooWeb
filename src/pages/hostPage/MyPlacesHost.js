import React from "react";
import Header from "../../components/host/Header";
import Footer from "../../components/guest/Footer";
import AuthModal from "../../components/guest/authModal";

function MyPlaces() {
  return (
    <div>
      <Header />

      <main>
        {/* <!-- TOP-FILTERS-SECTION -->
    <!-- DESKTOP-&-TABLET --> */}
        <div className="top-filter-wrap">
          <div className="container-fluid">
            <div className="top-filter-mobile">
              <div className="left-se">
                <h1 className="my-places-heading">My Places</h1>
              </div>
              <div className="right-sec">
                <div className="top-filter-inner">
                  <div className="top-filter-inner-btns">
                    <div className="totalearning">
                      <p>$1200.00</p>
                      <span className="info-wrap">
                        <img src="images/Host/green-info.svg" alt="" />
                        <span className="info-in">
                          Total earnings - This is calculated by aggregating all
                          earnings since the host signed up on Zyvo till the
                          date shown (Dynamic Real Time Updates is expected)
                          <br />
                          Future Earnings - This filter dynamically calculates
                          and updates the amount shown to reflect the total
                          revenue that hosts are expected to earn from existing
                          future bookings over the next 90 days. It provides
                          hosts with a real-time snapshot of their anticipated
                          earnings from confirmed bookings during the specified
                          timeframe.
                          <br />
                          NOTE: This filter's content is dynamic and adjusts in
                          real-time as new bookings are confirmed or existing
                          bookings are modified within the 90-day window. -
                          Hosts can view changes to their future earnings and
                          associated properties as bookings are added, updated,
                          or canceled, providing them with an up-to-date
                          overview of their upcoming revenue stream.
                        </span>
                      </span>
                    </div>
                    <div className="chat-left-top-dropdown dropdown total-earning-filter">
                      <span
                        className="dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="images/Host/total-earning-filter.png"
                          alt=""
                        />
                        <div className="chat-left-top-dropdown-list dropdown-menu">
                          <ul>
                            <li>
                              <a href="javascript:void(0);">Total Earnings</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Future Earnings</a>
                            </li>
                          </ul>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- DESKTOP-&-TABLET -->
    <!-- MOBILE --> */}
        <div className="top-filter-mobile-responsive">
          <div className="left-se">
            <h1 className="my-places-heading">My Places</h1>
          </div>
          <div className="right-sec">
            <div className="top-filter-inner">
              <div className="top-filter-inner-btns">
                <div className="totalearning">
                  <p>$1200.00</p>
                  <span className="info-wrap">
                    <img src="images/Host/green-info.svg" alt="" />
                    <span className="info-in">
                      Before you can book or host on the platform the name on Id
                      must match verification documents.
                    </span>
                  </span>
                </div>
                <div className="chat-left-top-dropdown dropdown total-earning-filter">
                  <span
                    className="dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="images/Host/total-earning-filter.png" alt="" />
                    <div className="chat-left-top-dropdown-list dropdown-menu">
                      <ul>
                        <li>
                          <a href="javascript:void(0);">Total Earnings</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Future Earnings</a>
                        </li>
                      </ul>
                    </div>
                  </span>
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
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top2">
                          <div className="">
                            <div className="chat-left-top-dropdown dropdown total-earning-filter saved-img-edit">
                              <span
                                className="dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img src="images/Host/edit.png" alt="" />
                                <div className="chat-left-top-dropdown-list dropdown-menu">
                                  <ul>
                                    <li>
                                      <a href="javascript:void(0);">Edit</a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:void(0);"
                                        data-bs-target="#Delete-saved-property-popup"
                                        data-bs-toggle="modal"
                                      >
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </span>
                            </div>
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
                          <div
                            className="carousel-item active  "
                            data-interval="1000000000"
                          >
                            <div className="instant-book-wpp">
                              <div className="img-instnt">
                                <img
                                  src="images/new-imgs/electric.png"
                                  alt=""
                                />
                              </div>
                              <div className="content-instsnt">
                                <h3>Instant book</h3>
                              </div>
                            </div>
                            <img
                              src="images/locations-grid/1.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="hosted-by-wpp">
                              <div className="img-hosted-wpp">
                                <img src="images/new-imgs/user.svg" alt="" />
                              </div>
                              <div className="content-hosted-tag">
                                <h3>Hosted by Mia</h3>
                                <p>Melbourne Beach, FL, US</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="carousel-item"
                            data-interval="1000000000"
                          >
                            <div className="instant-book-wpp">
                              <div className="img-instnt">
                                <img
                                  src="images/new-imgs/electric.png"
                                  alt=""
                                />
                              </div>
                              <div className="content-instsnt">
                                <h3>Instant book</h3>
                              </div>
                            </div>
                            <img
                              src="images/locations-grid/2.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="hosted-by-wpp">
                              <div className="img-hosted-wpp">
                                <img src="images/new-imgs/user.svg" alt="" />
                              </div>
                              <div className="content-hosted-tag">
                                <h3>Hosted by Mia</h3>
                                <p>Melbourne Beach, FL, US</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="carousel-item"
                            data-interval="100000000"
                          >
                            <div className="instant-book-wpp">
                              <div className="img-instnt">
                                <img
                                  src="images/new-imgs/electric.png"
                                  alt=""
                                />
                              </div>
                              <div className="content-instsnt">
                                <h3>Instant book</h3>
                              </div>
                            </div>
                            <img
                              src="images/locations-grid/3.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="hosted-by-wpp">
                              <div className="img-hosted-wpp">
                                <img src="images/new-imgs/user.svg" alt="" />
                              </div>
                              <div className="content-hosted-tag">
                                <h3>Hosted by Mia</h3>
                                <p>Melbourne Beach, FL, US</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="carousel-item"
                            data-interval="100000000"
                          >
                            <div className="instant-book-wpp">
                              <div className="img-instnt">
                                <img
                                  src="images/new-imgs/electric.png"
                                  alt=""
                                />
                              </div>
                              <div className="content-instsnt">
                                <h3>Instant book</h3>
                              </div>
                            </div>
                            <img
                              src="images/locations-grid/4.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="hosted-by-wpp">
                              <div className="img-hosted-wpp">
                                <img src="images/new-imgs/user.svg" alt="" />
                              </div>
                              <div className="content-hosted-tag">
                                <h3>Hosted by Mia</h3>
                                <p>Melbourne Beach, FL, US</p>
                              </div>
                            </div>
                          </div>
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
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <a href="#">Cabin in Peshastin</a>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="images/locations-grid/location-icon.svg"
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
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top2">
                          <div className="">
                            <div className="chat-left-top-dropdown dropdown total-earning-filter saved-img-edit">
                              <span
                                className="dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img src="images/Host/edit.png" alt="" />
                                <div className="chat-left-top-dropdown-list dropdown-menu">
                                  <ul>
                                    <li>
                                      <a href="javascript:void(0);">Edit</a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:void(0);"
                                        data-bs-target="#Delete-saved-property-popup"
                                        data-bs-toggle="modal"
                                      >
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-2"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-2"
                            data-bs-slide-to="1"
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
                          <div className="carousel-item active">
                            <div className="instant-book-wpp">
                              <div className="img-instnt">
                                <img
                                  src="images/new-imgs/electric.png"
                                  alt=""
                                />
                              </div>
                              <div className="content-instsnt">
                                <h3>Instant book</h3>
                              </div>
                            </div>
                            <img
                              src="images/locations-grid/1.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="hosted-by-wpp">
                              <div className="img-hosted-wpp">
                                <img src="images/new-imgs/user.svg" alt="" />
                              </div>
                              <div className="content-hosted-tag">
                                <h3>Hosted by Mia</h3>
                                <p>Melbourne Beach, FL, US</p>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="instant-book-wpp">
                              <div className="img-instnt">
                                <img
                                  src="images/new-imgs/electric.png"
                                  alt=""
                                />
                              </div>
                              <div className="content-instsnt">
                                <h3>Instant book</h3>
                              </div>
                            </div>
                            <img
                              src="images/locations-grid/2.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="hosted-by-wpp">
                              <div className="img-hosted-wpp">
                                <img src="images/new-imgs/user.svg" alt="" />
                              </div>
                              <div className="content-hosted-tag">
                                <h3>Hosted by Mia</h3>
                                <p>Melbourne Beach, FL, US</p>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="instant-book-wpp">
                              <div className="img-instnt">
                                <img
                                  src="images/new-imgs/electric.png"
                                  alt=""
                                />
                              </div>
                              <div className="content-instsnt">
                                <h3>Instant book</h3>
                              </div>
                            </div>
                            <img
                              src="images/locations-grid/3.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="hosted-by-wpp">
                              <div className="img-hosted-wpp">
                                <img src="images/new-imgs/user.svg" alt="" />
                              </div>
                              <div className="content-hosted-tag">
                                <h3>Hosted by Mia</h3>
                                <p>Melbourne Beach, FL, US</p>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="instant-book-wpp">
                              <div className="img-instnt">
                                <img
                                  src="images/new-imgs/electric.png"
                                  alt=""
                                />
                              </div>
                              <div className="content-instsnt">
                                <h3>Instant book</h3>
                              </div>
                            </div>
                            <img
                              src="images/locations-grid/4.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="hosted-by-wpp">
                              <div className="img-hosted-wpp">
                                <img src="images/new-imgs/user.svg" alt="" />
                              </div>
                              <div className="content-hosted-tag">
                                <h3>Hosted by Mia</h3>
                                <p>Melbourne Beach, FL, US</p>
                              </div>
                            </div>
                          </div>
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
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <a href="#">Cabin in Peshastin</a>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="images/locations-grid/location-icon.svg"
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
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top2">
                          <div className="">
                            <div className="chat-left-top-dropdown dropdown total-earning-filter saved-img-edit">
                              <span
                                className="dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img src="images/Host/edit.png" alt="" />
                                <div className="chat-left-top-dropdown-list dropdown-menu">
                                  <ul>
                                    <li>
                                      <a href="javascript:void(0);">Edit</a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:void(0);"
                                        data-bs-target="#Delete-saved-property-popup"
                                        data-bs-toggle="modal"
                                      >
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className=" carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-3"
                            data-bs-slide-to="0"
                            className="active"
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
                          <div className="carousel-item active">
                            <div className="instant-book-wpp">
                              <div className="img-instnt">
                                <img
                                  src="images/new-imgs/electric.png"
                                  alt=""
                                />
                              </div>
                              <div className="content-instsnt">
                                <h3>Instant book</h3>
                              </div>
                            </div>
                            <img
                              src="images/locations-grid/1.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="hosted-by-wpp">
                              <div className="img-hosted-wpp">
                                <img src="images/new-imgs/user.svg" alt="" />
                              </div>
                              <div className="content-hosted-tag">
                                <h3>Hosted by Mia</h3>
                                <p>Melbourne Beach, FL, US</p>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="instant-book-wpp">
                              <div className="img-instnt">
                                <img
                                  src="images/new-imgs/electric.png"
                                  alt=""
                                />
                              </div>
                              <div className="content-instsnt">
                                <h3>Instant book</h3>
                              </div>
                            </div>
                            <img
                              src="images/locations-grid/2.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="hosted-by-wpp">
                              <div className="img-hosted-wpp">
                                <img src="images/new-imgs/user.svg" alt="" />
                              </div>
                              <div className="content-hosted-tag">
                                <h3>Hosted by Mia</h3>
                                <p>Melbourne Beach, FL, US</p>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="instant-book-wpp">
                              <div className="img-instnt">
                                <img
                                  src="images/new-imgs/electric.png"
                                  alt=""
                                />
                              </div>
                              <div className="content-instsnt">
                                <h3>Instant book</h3>
                              </div>
                            </div>
                            <img
                              src="images/locations-grid/3.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="hosted-by-wpp">
                              <div className="img-hosted-wpp">
                                <img src="images/new-imgs/user.svg" alt="" />
                              </div>
                              <div className="content-hosted-tag">
                                <h3>Hosted by Mia</h3>
                                <p>Melbourne Beach, FL, US</p>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="instant-book-wpp">
                              <div className="img-instnt">
                                <img
                                  src="images/new-imgs/electric.png"
                                  alt=""
                                />
                              </div>
                              <div className="content-instsnt">
                                <h3>Instant book</h3>
                              </div>
                            </div>
                            <img
                              src="images/locations-grid/4.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="hosted-by-wpp">
                              <div className="img-hosted-wpp">
                                <img src="images/new-imgs/user.svg" alt="" />
                              </div>
                              <div className="content-hosted-tag">
                                <h3>Hosted by Mia</h3>
                                <p>Melbourne Beach, FL, US</p>
                              </div>
                            </div>
                          </div>
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
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <a href="#">Cabin in Peshastin</a>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
                <!-- ITEM --> */}
                    <div className="add-new-place">
                      <div className="addnew-place-inner">
                        <a
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#Add-property-popup"
                        >
                          <img src="images/Host/add-newplace.png" alt="" />
                        </a>
                        <p>Add new Place</p>
                      </div>
                    </div>
                    {/* <!-- ITEM -->


                <!-- 1-LINE --> */}
                  </div>
                  <div className="location-map-wrap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.139268703457!2d-133.14340392403935!3d55.4776704131501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x540e467f9dd315f3%3A0xf4eae0d4d7764524!2s245%20Cold%20Storage%20Rd%2C%20Craig%2C%20AK%2099921%2C%20USA!5e0!3m2!1sen!2sin!4v1723457458145!5m2!1sen!2sin"
                      width="600"
                      height="450"
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
        {/* <!-- LOCATION-GRID-&-MAP-SECTION --> */}
      </main>
      <AuthModal />
      <Footer />
    </div>
  );
}

export default MyPlaces;
