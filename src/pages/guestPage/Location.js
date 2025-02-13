import React from "react";
import Header from "../../components/guest/Header";
import Footer from "../../components/guest/Footer";
import AuthModal from "../../components/guest/authModal";
import { useNavigate } from "react-router-dom";

function Location() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/wishlist");
  };

  return (
    <>
      <Header />

      {/* for main body */}

      <main className="mb-0">
        {/* <!-- MOBILE --> */}
        <div className="mob-search-filter border-start-0 border-end-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mob-search-filter-in">
                  <div className="mob-search-bar-back">
                    <a href="home.html">
                      <i className="fa-regular fa-arrow-left"></i>
                    </a>
                  </div>
                  {/* <!-- <div className="mob-filter-in">
                <a href="mob-filter.html"><img src="https://design.yilstaging.com/ZYVO/assets/images/mobile/filters/filter.svg" alt=""/></a>
              </div> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- MOBILE -->
    <!-- LOCATION-PAGE --> */}
        <div className="location-wrap location-detail">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="location-top">
                  <h1>
                    Cabin in Peshastin{" "}
                    <ul>
                      <li>
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />{" "}
                        <span>5.0</span> (30 reviews)
                      </li>
                    </ul>
                  </h1>
                  <ul>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                        alt=""
                      />{" "}
                      <span>5.0</span> (30 reviews)
                    </li>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/location/time.svg"
                        alt=""
                      />{" "}
                      2 hr min
                    </li>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/location/size.svg"
                        alt=""
                      />{" "}
                      323 sqft
                    </li>
                    <li>
                      <i className="fa-solid fa-bolt"></i> Instant book
                    </li>
                    {/* <!-- RIGHT --> */}
                    <li className="location-top-share">
                      <a
                        href="javascript:void(0);"
                        data-bs-target="#share-popup"
                        data-bs-toggle="modal"
                      >
                        <i className="fa-solid fa-share-nodes"></i> Share
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#add-wishlist"
                      >
                        <i className="fa-solid fa-heart"></i> Wishlist
                      </a>
                    </li>
                    {/* <!-- RIGHT --> */}
                  </ul>
                </div>
                <button
                  className="location-image-grid"
                  type="button"
                  data-bs-target="#loction-grid-popup"
                  data-bs-toggle="modal"
                >
                  <div className="location-image-grid-one">
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/1.svg"
                      alt=""
                    />
                  </div>
                  <div className="location-image-grid-four">
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/2.svg"
                      alt=""
                    />
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/3.svg"
                      alt=""
                    />
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/4.svg"
                      alt=""
                    />
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/5.svg"
                      alt=""
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="location-right">
                  <div className="location-right-top">
                    <h2>
                      $13/hr <br /> <span>1 hr minimum</span>
                    </h2>
                    <hr />
                    <div className="location-right-top-in">
                      <p>
                        4+ hour discount{" "}
                        <span className="info-wrap">
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/info.svg"
                            alt=""
                          />
                          <span className="info-in">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum quae iste voluptatem at labore fuga
                            commodi atque cum ut.
                          </span>
                        </span>
                      </p>
                      <p>15% off</p>
                    </div>
                  </div>
                  <div className="location-right-hour-day">
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-hourly-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-hourly"
                          type="button"
                          role="tab"
                          aria-controls="pills-hourly"
                          aria-selected="false"
                        >
                          Choose Hours
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-dates-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-dates"
                          type="button"
                          role="tab"
                          aria-controls="pills-dates"
                          aria-selected="true"
                        >
                          Choose Day
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane show active"
                        id="pills-hourly"
                        role="tabpanel"
                        aria-labelledby="pills-hourly-tab"
                      >
                        <div className="hour-slider-wrap">
                          <div id="slider"></div>
                          <div className="hour-slider-in">
                            <p>
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/filters/time.svg"
                                alt=""
                              />
                              3 hour
                            </p>
                            <p>
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/price.svg"
                                alt=""
                              />
                              $30
                            </p>
                          </div>
                          <button type="button" className="location-right-btn">
                            Start Booking
                          </button>
                        </div>
                      </div>
                      <div
                        className="tab-pane"
                        id="pills-dates"
                        role="tabpanel"
                        aria-labelledby="pills-dates-tab"
                      >
                        <div id="datepicker"></div>
                        <div className="time-slot">
                          <div className="time-slot-inner">
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
                          <div className="time-slot-inner">
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
                        <form action="checkout.html">
                          <button type="submit" className="location-right-btn">
                            Proceed to Checkout
                          </button>
                        </form>
                      </div>
                    </div>
                    <h4>Cancel for free within 24 hours</h4>
                  </div>
                  <div className="location-right-shield">
                    <span className="info-wrap">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/info.svg"
                        alt=""
                      />
                      <span className="info-in">
                        Your safety and peace of mind are our top priorities.
                        ZYVO is proud to provide comprehensive liability
                        insurance coverage for all bookings
                      </span>
                    </span>
                    <h2>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/location/zyvo-shield.svg"
                        alt=""
                      />
                      ZYVO Shield
                    </h2>
                    <p>
                      Our Commitment to Your Safety and <br /> Protection on
                      Zyvo.
                    </p>
                  </div>
                  <div className="chat-right-top">
                    <div className="chat-right-top-mob-left">
                      <h3>Hosted by</h3>
                      <div className="chat-right-top-profile">
                        <img
                          className="chat-right-top-profile-image"
                          src="https://design.yilstaging.com/ZYVO/assets/images/chat/profile/1.svg"
                          alt=""
                        />
                        <h2>Mia J.</h2>
                        <img
                          className="chat-right-top-batch-image"
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/batch.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="chat-right-top-mob-right">
                      <a href="chat.html">Message the host</a>
                      <p>
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/time.svg"
                          alt=""
                        />
                        Typically respond within 1 hr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 order-md-first order-lg-first">
                <div className="location-left">
                  <h2>About the Space</h2>
                  <div className="location-about">
                    <p className="active">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only. Lorem Ipsum
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only.Lorem Ipsum has
                      been the industry's standard dummy text....
                    </p>
                    <a href="javascript:void(0);">Read more</a>
                  </div>
                  <hr />
                  <h2>Included in your booking</h2>
                  <div className="location-included">
                    <ul>
                      <li>
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/location/included/1.svg"
                          alt=""
                        />{" "}
                        Parking
                      </li>
                      <li>
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/location/included/2.svg"
                          alt=""
                        />{" "}
                        Wifi
                      </li>
                      <li>
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/location/included/3.svg"
                          alt=""
                        />{" "}
                        2 Rooms
                      </li>
                      <li>
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/location/included/4.svg"
                          alt=""
                        />{" "}
                        Kitchen
                      </li>
                      <li>
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/location/included/5.svg"
                          alt=""
                        />{" "}
                        Tables
                      </li>
                      <li>
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/location/included/6.svg"
                          alt=""
                        />{" "}
                        Chairs
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <h2>Rules</h2>
                  <div className="location-rules">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/location/included/1.svg"
                              alt=""
                            />{" "}
                            Parking
                          </button>
                        </h3>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            This is the first item's accordion body. It is shown
                            by default, until the collapse plugin adds the
                            appropriate classNamees that we use to style each
                            element. These classNamees control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the, though the transition does limit
                            overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/location/included/7.svg"
                              alt=""
                            />{" "}
                            Host rules
                          </button>
                        </h3>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            This is the first item's accordion body. It is shown
                            by default, until the collapse plugin adds the
                            appropriate classNamees that we use to style each
                            element. These classNamees control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the, though the transition does limit
                            overflow.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <h2>Add-ons from the host</h2>
                  <div className="location-addons">
                    <p>
                      Host provided services, items or options. Available at
                      checkout.
                    </p>
                    <div className="location-addons-in">
                      <div className="location-addons-item">
                        <div className="location-addons-item-image">
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/location/add-ons/1.svg"
                            alt=""
                          />
                        </div>
                        <h4>
                          Computer Screen <br /> <span>$10 / Item</span>
                        </h4>
                      </div>
                      <div className="location-addons-item">
                        <div className="location-addons-item-image">
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/location/add-ons/2.svg"
                            alt=""
                          />
                        </div>
                        <h4>
                          Bed Sheets <br /> <span>$10 / Item</span>
                        </h4>
                      </div>
                      <div className="location-addons-item">
                        <div className="location-addons-item-image">
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/location/add-ons/3.svg"
                            alt=""
                          />
                        </div>
                        <h4>
                          Phone charger <br /> <span>$10 / Item</span>
                        </h4>
                      </div>
                      <div className="location-addons-item">
                        <div className="location-addons-item-image">
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/location/add-ons/4.svg"
                            alt=""
                          />
                        </div>
                        <h4>
                          Ring Light <br /> <span>$10 / Item</span>
                        </h4>
                      </div>
                    </div>
                    <div className="location-hidden-addons">
                      <div className="location-addons-in">
                        <div className="location-addons-item">
                          <div className="location-addons-item-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/location/add-ons/1.svg"
                              alt=""
                            />
                          </div>
                          <h4>
                            Computer Screen <br /> <span>$10 / Item</span>
                          </h4>
                        </div>
                        <div className="location-addons-item">
                          <div className="location-addons-item-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/location/add-ons/2.svg"
                              alt=""
                            />
                          </div>
                          <h4>
                            Bed Sheets <br /> <span>$10 / Item</span>
                          </h4>
                        </div>
                        <div className="location-addons-item">
                          <div className="location-addons-item-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/location/add-ons/3.svg"
                              alt=""
                            />
                          </div>
                          <h4>
                            Phone charger <br /> <span>$10 / Item</span>
                          </h4>
                        </div>
                        <div className="location-addons-item">
                          <div className="location-addons-item-image">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/location/add-ons/4.svg"
                              alt=""
                            />
                          </div>
                          <h4>
                            Ring Light <br /> <span>$10 / Item</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <a href="javascript:void(0);">Show More</a>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="address-location">
                  <div className="location-left">
                    <h2>Address & Location</h2>
                    <p>
                      <u>Midtown Manhattan, New York, NY</u>
                    </p>
                  </div>
                  <div className="address-location-map">
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
                <div className="location-reviews">
                  <div className="location-reviews-top">
                    <h1>
                      Reviews (30)
                      <span>
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />{" "}
                        <b>4.9</b> Rating
                      </span>
                    </h1>
                    <p className="ms-auto me-1">Sort by:</p>
                    <div className="chat-left-top-dropdown dropdown">
                      <span
                        className="dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Highest Review
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/dropdown.svg"
                          alt=""
                        />
                      </span>
                      <div className="chat-left-top-dropdown-list dropdown-menu">
                        <ul>
                          <li>
                            <a href="javascript:void(0);">Highest Review</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Lowest Review</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Recent Reviews</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- LIST --> */}
                  <div className="location-reviews-list">
                    <div className="location-reviews-list-left">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/location/reviews/1.svg"
                        alt=""
                      />
                      <h2>
                        Emily James <br />{" "}
                        <span>Host was very helpful. thank you so much</span>
                      </h2>
                    </div>
                    <div className="location-reviews-list-right location-reviews-list-right-mob">
                      <div className="location-reviews-list-right-star">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                      </div>
                      <p>Mar 09, 22</p>
                    </div>
                  </div>
                  {/* <!-- LIST -->
              <!-- LIST --> */}
                  <div className="location-reviews-list">
                    <div className="location-reviews-list-left">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/location/reviews/2.svg"
                        alt=""
                      />
                      <h2>
                        Emily James <br />{" "}
                        <span>Host was very helpful. thank you so much</span>
                      </h2>
                    </div>
                    <div className="location-reviews-list-right">
                      <div className="location-reviews-list-right-star">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon-blank.svg"
                          alt=""
                        />
                      </div>
                      <p>Mar 09, 22</p>
                    </div>
                  </div>
                  {/* <!-- LIST -->
              <!-- LIST --> */}
                  <div className="location-reviews-list">
                    <div className="location-reviews-list-left">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/location/reviews/3.svg"
                        alt=""
                      />
                      <h2>
                        James Kristen <br />{" "}
                        <span>Host was very helpful. thank you so much</span>
                      </h2>
                    </div>
                    <div className="location-reviews-list-right">
                      <div className="location-reviews-list-right-star">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                      </div>
                      <p>Mar 09, 22</p>
                    </div>
                  </div>
                  {/* <!-- LIST -->
              <!-- LIST --> */}
                  <div className="location-reviews-list">
                    <div className="location-reviews-list-left">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/location/reviews/4.svg"
                        alt=""
                      />
                      <h2>
                        Michael Kenny <br />{" "}
                        <span>Host was very helpful. thank you so much</span>
                      </h2>
                    </div>
                    <div className="location-reviews-list-right">
                      <div className="location-reviews-list-right-star">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                      </div>
                      <p>Mar 09, 22</p>
                    </div>
                  </div>
                  {/* <!-- LIST --> */}
                  <button className="location-reviews-btn" type="button">
                    Show More Reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- LOCATION-PAGE --> */}
      </main>
      {/* share with friends */}

      <div
        className="modal fade custom-modal"
        id="share-popup"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <h2>Share with friends</h2>
              <div className="share-in">
                <ul>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/1.svg"
                        alt=""
                      />{" "}
                      Copy Link
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/2.svg"
                        alt=""
                      />{" "}
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/3.svg"
                        alt=""
                      />{" "}
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/4.svg"
                        alt=""
                      />{" "}
                      Email
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/5.svg"
                        alt=""
                      />{" "}
                      X
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/6.svg"
                        alt=""
                      />{" "}
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/7.svg"
                        alt=""
                      />{" "}
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/8.svg"
                        alt=""
                      />{" "}
                      Message
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* add a wishlist */}

      <div
        className="modal fade"
        id="add-wishlist"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Add to Wishlist</h2>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body px-4 py-4">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="explore-guides-articles-in">
                    <a href="javascript:void(0);">
                      <div className="explore-guides-articles-image">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                          alt=""
                        />
                      </div>
                      <h3>Sea view</h3>
                      <p>4 saved</p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="explore-guides-articles-in">
                    <a href="javascript:void(0);">
                      <div className="explore-guides-articles-image">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                          alt=""
                        />
                      </div>
                      <h3>Cabin in Peshastin</h3>
                      <p>4 saved</p>
                    </a>
                  </div>
                </div>
                <div className="explore-guides-articles-wrap-btn">
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    data-bs-target="#create-wishlist"
                    data-bs-toggle="modal"
                  >
                    Create Wishlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* create wishlist */}

      <div
        className="modal fade custom-modal"
        id="create-wishlist"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create Wishlist</h2>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body px-4 py-4">
              <form onSubmit={handleSubmit}>
                <p>Please Enter the name</p>
                <label>
                  <input type="text" className="ps-3" placeholder="Name" />
                </label>
                <textarea disabled value="Description" />
                <p>
                  {/* style="color: #808080; font-weight: 400;" */}
                  Max 50 characters
                </p>
                <div className="custom-modal-label d-flex gap-3">
                  <input type="submit" value="Create" data-bs-dismiss="modal" />
                  <input type="reset" className="cancel-btn" value="Clear" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- LOCATION-IMAGE-GRID-POPUP --> */}
      <div
        className="modal fade"
        id="loction-grid-popup"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fa-solid fa-arrow-left"></i>
              </span>
            </button>
            <div class="modal-body p-5 pb-0">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="true"
              >
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
                  <div className="carousel-item active">
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/location/modal-view.svg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/location/modal-view.svg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/location/modal-view.svg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/location/modal-view.svg"
                      className="d-block w-100"
                      alt="..."
                    />
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
            </div>
          </div>
        </div>
      </div>
      <AuthModal />
      <Footer />
    </>
  );
}

export default Location;
