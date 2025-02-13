import React from "react";
import Header from "../../components/guest/Header";
import Footer from "../../components/guest/Footer";
import AuthModal from "../../components/guest/authModal";

const CreateProfile = () => {
  return (
    <>
      <Header />

      {/* auth */}

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

        <div className="complete-your-profile">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="complete-your-profile-left">
                  <h1>Complete your profile</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="complete-your-profile-right">
                  <div className="complete-your-profile-right-top">
                    <div className="user-profile-upload-name">
                      <div className="user-profile-upload">
                        <div className="user-profile-upload-image">
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/profile.png"
                            alt=""
                          />
                        </div>
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#add-profile-picture-popup"
                          type="button"
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                      </div>
                      <div className="user-profile-name">
                        <h2>
                          Hey Katelyn!
                          <button type="button">
                            <i className="fa-solid fa-pen"></i>
                          </button>
                          <span className="user-name-dropdown">
                            <form>
                              <label>
                                <input type="text" placeholder="First name*" />
                                <input type="text" placeholder="Last name*" />
                              </label>
                              <input type="submit" value="Save Changes" />
                            </form>
                          </span>
                        </h2>
                        <p>
                          Guest
                          <span className="info-wrap">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/info.svg"
                              alt=""
                            />
                            <span className="info-in">
                              Before you can book or host on the platform, the
                              name on ID must match verification documents.
                            </span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="complete-your-profile-right-bottom">
                    <div className="complete-your-profile-right-bottom-in">
                      <div className="complete-your-profile-right-bottom-image">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/mail.svg"
                          alt=""
                        />
                      </div>
                      <div className="complete-your-profile-right-bottom-data">
                        <h1>Email Address</h1>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#confirm-email-popup"
                        >
                          <u>Confirm now</u>
                        </a>
                      </div>
                    </div>
                    <div className="complete-your-profile-right-bottom-in">
                      <div className="complete-your-profile-right-bottom-image">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/call.svg"
                          alt=""
                        />
                      </div>
                      <div className="complete-your-profile-right-bottom-data">
                        <h1>Phone Number</h1>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#confirm-phone-popup"
                        >
                          <u>Confirm now</u>
                        </a>
                      </div>
                    </div>
                    <div className="complete-your-profile-right-bottom-in">
                      <div className="complete-your-profile-right-bottom-image">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/identity.svg"
                          alt=""
                        />
                      </div>
                      <div className="complete-your-profile-right-bottom-data">
                        <h1>Verify identity</h1>
                        <p>
                          Verified <i className="fa-solid fa-badge-check"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 order-lg-first">
                <div className="complete-your-profile-left">
                  <form action="profile.html">
                    <h2>
                      About Me{" "}
                      <button type="button">
                        <i className="fa-solid fa-pen"></i>
                      </button>
                    </h2>
                    <div className="about-me">
                      <textarea disabled>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took.
                      </textarea>
                    </div>
                    <div className="user-data-list-wrap">
                      <h2>Where I live*</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item">
                          <input
                            type="text"
                            placeholder="New York, US"
                            id="where-search"
                          />
                          <button type="button">
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                          <div className="user-data-list-dropdown">
                            <ul>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                    alt=""
                                  />{" "}
                                  Alaska, US
                                </a>
                              </li>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                    alt=""
                                  />{" "}
                                  California, US
                                </a>
                              </li>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                    alt=""
                                  />{" "}
                                  Delaware, US
                                </a>
                              </li>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                    alt=""
                                  />{" "}
                                  Florida, US
                                </a>
                              </li>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                    alt=""
                                  />{" "}
                                  New York, US
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button type="button" className="add-new-btn">
                          Add New <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <h2>My work</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item my-work">
                          <input type="text" placeholder="Lawyer" />
                          <button type="button" className="check">
                            <i className="fa-solid fa-check"></i>
                          </button>
                          <div className="user-data-list-dropdown">
                            <ul>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/list-icons/work.svg"
                                    alt=""
                                  />{" "}
                                  Lawyer
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button type="button" className="add-new-btn">
                          Add New <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <h2>Languages I speak*</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item languages">
                          <input type="text" placeholder="English" />
                          <button type="button">
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                          <div className="user-data-list-dropdown">
                            <ul>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/list-icons/languages.svg"
                                    alt=""
                                  />{" "}
                                  English
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button type="button" className="add-new-btn">
                          Add New <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <h2>Hobbies</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item hobbies">
                          <input type="text" placeholder="Hobbies" />
                          <button type="button" className="check">
                            <i className="fa-solid fa-check"></i>
                          </button>
                          <div className="user-data-list-dropdown">
                            <ul>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/list-icons/hobbies.svg"
                                    alt=""
                                  />{" "}
                                  Sports
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button type="button" className="add-new-btn">
                          Add New <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <h2>Pets</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item pets">
                          <input type="text" placeholder="Pets" />
                          <button type="button">
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                          <div className="user-data-list-dropdown">
                            <ul>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">Dog</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button type="button" className="add-new-btn">
                          Add New <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="user-data-btn">
                      <button type="submit">Save Profile</button>
                      <a href="profile.html">Skip for now</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AuthModal />
      <Footer />
    </>
  );
};

export default CreateProfile;
