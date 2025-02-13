import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterModal from "./authModalGuest/RegisterModal";

const HomeHeader = () => {
  const [regModl, setRegModl] = useState(false);
  return (
    <>
      <header>
        {/* <!-- NAV -->
    <!-- DESKTOP-&-TABLET --> */}
        <div class="nav-wrap">
          <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
              <Link class="navbar-brand" to="/">
                <img
                  src="https://design.yilstaging.com/ZYVO/assets/images/logo.svg"
                  alt=""
                />
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="nav-inner">
                  <div class="nav-inner-mid">
                    <form>
                      <div class="nav-inner-where in-filter">
                        <input
                          type="text"
                          placeholder="Where"
                          id="where-search"
                        />
                        <div class="nav-inner-where-list">
                          <ul>
                            <li class="where-src-item">
                              <a href="javascript:void(0);">
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                  alt=""
                                />
                                Alaska, US
                              </a>
                            </li>
                            <li class="where-src-item">
                              <a href="javascript:void(0);">
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                  alt=""
                                />
                                California, US
                              </a>
                            </li>
                            <li class="where-src-item">
                              <a href="javascript:void(0);">
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                  alt=""
                                />
                                Delaware, US
                              </a>
                            </li>
                            <li class="where-src-item">
                              <a href="javascript:void(0);">
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                  alt=""
                                />
                                Florida, US
                              </a>
                            </li>
                            <li class="where-src-item">
                              <a href="javascript:void(0);">
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                  alt=""
                                />
                                New York, US
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="nav-inner-time in-filter">
                        <input type="button" value="Time" id="time-search" />
                        <div class="nav-inner-time-list">
                          <ul
                            class="nav nav-pills mb-3"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li class="nav-item" role="presentation">
                              <button
                                class="nav-link active"
                                id="pills-dates-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-dates"
                                type="button"
                                role="tab"
                                aria-controls="pills-dates"
                                aria-selected="true"
                              >
                                Dates
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="nav-link"
                                id="pills-hourly-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-hourly"
                                type="button"
                                role="tab"
                                aria-controls="pills-hourly"
                                aria-selected="false"
                              >
                                Hourly
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="nav-link"
                                id="pills-flexible-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-flexible"
                                type="button"
                                role="tab"
                                aria-controls="pills-flexible"
                                aria-selected="false"
                              >
                                Flexible
                              </button>
                            </li>
                          </ul>
                          <div class="tab-content" id="pills-tabContent">
                            <div
                              class="tab-pane show active"
                              id="pills-dates"
                              role="tabpanel"
                              aria-labelledby="pills-dates-tab"
                            >
                              <div id="datepicker-2"></div>
                            </div>
                            <div
                              class="tab-pane"
                              id="pills-hourly"
                              role="tabpanel"
                              aria-labelledby="pills-hourly-tab"
                            >
                              <div class="hour-slider-wrap">
                                <div id="slider"></div>
                              </div>
                            </div>
                            <div
                              class="tab-pane"
                              id="pills-flexible"
                              role="tabpanel"
                              aria-labelledby="pills-flexible-tab"
                            >
                              <div id="datepicker"></div>
                              <div class="time-slot">
                                <div class="time-slot-inner">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/datepicker/time.svg"
                                    alt=""
                                  />
                                  <select>
                                    <option value="1">From</option>
                                    <option value="12:00AM">12:00AM</option>
                                    <option value="12:30AM">12:30AM</option>
                                    <option value="1:00AM">1:00AM</option>
                                    <option value="1:30AM">1:30AM</option>
                                    <option value="2:00AM">2:00AM</option>
                                    <option value="2:30AM">2:30AM</option>
                                    <option value="3:00AM">3:00AM</option>
                                    <option value="3:30AM">3:30AM</option>
                                    <option value="4:00AM">4:00AM</option>
                                    <option value="4:30AM">4:30AM</option>
                                    <option value="5:00AM">5:00AM</option>
                                    <option value="5:30AM">5:30AM</option>
                                    <option value="6:00AM">6:00AM</option>
                                    <option value="6:30AM">6:30AM</option>
                                    <option value="7:00AM">7:00AM</option>
                                    <option value="7:30AM">7:30AM</option>
                                    <option value="8:00AM">8:00AM</option>
                                    <option value="8:30AM">8:30AM</option>
                                    <option value="9:00AM">9:00AM</option>
                                    <option value="9:30AM">9:30AM</option>
                                    <option value="10:00AM">10:00AM</option>
                                    <option value="10:30AM">10:30AM</option>
                                    <option value="11:00AM">11:00AM</option>
                                    <option value="11:30AM">11:30AM</option>
                                    <option value="12:00PM">12:00PM</option>
                                    <option value="12:30PM">12:30PM</option>
                                    <option value="1:00PM">1:00PM</option>
                                    <option value="1:30PM">1:30PM</option>
                                    <option value="2:00PM">2:00PM</option>
                                    <option value="2:30PM">2:30PM</option>
                                    <option value="3:00PM">3:00PM</option>
                                    <option value="3:30PM">3:30PM</option>
                                    <option value="4:00PM">4:00PM</option>
                                    <option value="4:30PM">4:30PM</option>
                                    <option value="5:00PM">5:00PM</option>
                                    <option value="5:30PM">5:30PM</option>
                                    <option value="6:00PM">6:00PM</option>
                                    <option value="6:30PM">6:30PM</option>
                                    <option value="7:00PM">7:00PM</option>
                                    <option value="7:30PM">7:30PM</option>
                                    <option value="8:00PM">8:00PM</option>
                                    <option value="8:30PM">8:30PM</option>
                                    <option value="9:00PM">9:00PM</option>
                                    <option value="9:30PM">9:30PM</option>
                                    <option value="10:00PM">10:00PM</option>
                                    <option value="10:30PM">10:30PM</option>
                                    <option value="11:00PM">11:00PM</option>
                                    <option value="11:30PM">11:30PM</option>
                                  </select>
                                </div>
                                <div class="time-slot-inner">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/datepicker/time.svg"
                                    alt=""
                                  />
                                  <select>
                                    <option value="1">To</option>
                                    <option value="12:00AM">12:00AM</option>
                                    <option value="12:30AM">12:30AM</option>
                                    <option value="1:00AM">1:00AM</option>
                                    <option value="1:30AM">1:30AM</option>
                                    <option value="2:00AM">2:00AM</option>
                                    <option value="2:30AM">2:30AM</option>
                                    <option value="3:00AM">3:00AM</option>
                                    <option value="3:30AM">3:30AM</option>
                                    <option value="4:00AM">4:00AM</option>
                                    <option value="4:30AM">4:30AM</option>
                                    <option value="5:00AM">5:00AM</option>
                                    <option value="5:30AM">5:30AM</option>
                                    <option value="6:00AM">6:00AM</option>
                                    <option value="6:30AM">6:30AM</option>
                                    <option value="7:00AM">7:00AM</option>
                                    <option value="7:30AM">7:30AM</option>
                                    <option value="8:00AM">8:00AM</option>
                                    <option value="8:30AM">8:30AM</option>
                                    <option value="9:00AM">9:00AM</option>
                                    <option value="9:30AM">9:30AM</option>
                                    <option value="10:00AM">10:00AM</option>
                                    <option value="10:30AM">10:30AM</option>
                                    <option value="11:00AM">11:00AM</option>
                                    <option value="11:30AM">11:30AM</option>
                                    <option value="12:00PM">12:00PM</option>
                                    <option value="12:30PM">12:30PM</option>
                                    <option value="1:00PM">1:00PM</option>
                                    <option value="1:30PM">1:30PM</option>
                                    <option value="2:00PM">2:00PM</option>
                                    <option value="2:30PM">2:30PM</option>
                                    <option value="3:00PM">3:00PM</option>
                                    <option value="3:30PM">3:30PM</option>
                                    <option value="4:00PM">4:00PM</option>
                                    <option value="4:30PM">4:30PM</option>
                                    <option value="5:00PM">5:00PM</option>
                                    <option value="5:30PM">5:30PM</option>
                                    <option value="6:00PM">6:00PM</option>
                                    <option value="6:30PM">6:30PM</option>
                                    <option value="7:00PM">7:00PM</option>
                                    <option value="7:30PM">7:30PM</option>
                                    <option value="8:00PM">8:00PM</option>
                                    <option value="8:30PM">8:30PM</option>
                                    <option value="9:00PM">9:00PM</option>
                                    <option value="9:30PM">9:30PM</option>
                                    <option value="10:00PM">10:00PM</option>
                                    <option value="10:30PM">10:30PM</option>
                                    <option value="11:00PM">11:00PM</option>
                                    <option value="11:30PM">11:30PM</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="nav-inner-activity in-filter">
                        <input
                          type="button"
                          value="Activity"
                          id="activity-search"
                        />
                        <div class="nav-inner-activity-list">
                          <ul>
                            <li class="activity-src-item">
                              <a href="javascript:void(0);">Stays</a>
                            </li>
                            <li class="activity-src-item">
                              <a href="javascript:void(0);">Event Space</a>
                            </li>
                            <li class="activity-src-item">
                              <a href="javascript:void(0);">Photo Shoot</a>
                            </li>
                            <li class="activity-src-item">
                              <a href="javascript:void(0);">Music Video</a>
                            </li>
                            <li class="activity-src-item">
                              <a href="javascript:void(0);">Birthday Party</a>
                            </li>
                            <li class="activity-src-item">
                              <a href="javascript:void(0);">Wedding</a>
                            </li>
                            <li class="activity-src-item">
                              <a href="javascript:void(0);">Meeting</a>
                            </li>
                            <li class="activity-src-item">
                              <a href="javascript:void(0);">Baby Shower</a>
                            </li>
                            <li class="activity-src-item">
                              <a href="javascript:void(0);">Pool</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="nav-inner-filter-button">
                        <button type="submit">
                          <i class="fa-regular fa-magnifying-glass"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="nav-inner-right">
                    <ul>
                      <li>
                        <a href="/aboutUs" class="active">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          // href="javascript:void(0);"
                          // data-bs-toggle="modal"
                          // data-bs-target="#register-phone-popup"
                          onClick={() => setRegModl(true)}
                        >
                          Register
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* <!-- DESKTOP-&-TABLET -->
    <!-- MOBILE --> */}
        <div class="mob-nav border-start-0 border-end-0">
          <div class="container-fluid">
            <ul class="gap-5">
              <li>
                <a href="#" class="active">
                  <img
                    src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/1.svg"
                    alt=""
                  />
                  Discover
                </a>
              </li>
              {/* <!-- <li><a href="#"><img src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/2.svg" alt="">Inbox</a></li> --> */}
              {/* <!-- <li><a href="#"><img src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/3.svg" alt="">Bookings</a></li> --> */}
              <li>
                <a href="wishlist.html">
                  <img
                    src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/4.svg"
                    alt=""
                  />
                  Wishlists
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#register-phone-popup"
                >
                  <img
                    src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/5.svg"
                    alt=""
                  />
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- MOBILE -->
    <!-- NAV -->
    <!-- MAP-BUTTON --> */}
        <div class="mob-show-map animate__animated animate__backInUp animate__delay-1s">
          <a href="mob-map.html">
            <img
              src="https://design.yilstaging.com/ZYVO/assets/images/filters/show-map.svg"
              alt=""
            />
            Show Map
          </a>
        </div>
        {/* <!-- MAP-BUTTON --> */}
      </header>
      <RegisterModal
        show={regModl}
        onHide={() => setRegModl(false)}
        CallBack={(bool) => setRegModl(bool)}
        loginModal={true}
      />
    </>
  );
};

export default HomeHeader;
