import React from "react";
import Header from "../../../components/guest/Header";
import Footer from "../../../components/guest/Footer";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <>
      <Header />

      {/* for main */}

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
                        alt="Filter Icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MOBILE */}

        {/* FAQ-PAGE */}
        <div className="faq-wrap">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="faq-heading">
                  <h1>Frequently Asked Questions</h1>
                </div>
              </div>
              <div className="col-lg-11 col-md-11">
                <div className="faq-in">
                  <div className="faq-top mb-4">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the <br />{" "}
                      industry's standard dummy text ever since the 1500s, when
                      an unknown printer took a galley.
                    </p>
                  </div>
                  {/* FAQ CONTENT */}
                  <div className="faq-accordation-wrap">
                    <div className="accordion" id="accordionExample">
                      {[...Array(9)].map((_, index) => (
                        <div className="accordion-item" key={index}>
                          <h2
                            className="accordion-header"
                            id={`heading${index + 1}`}
                          >
                            {index + 1}. Sample Question
                            <div className="accordion-button-over">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index + 1}`}
                                aria-expanded="false"
                                aria-controls={`collapse${index + 1}`}
                              ></button>
                            </div>
                          </h2>
                          <div
                            id={`collapse${index + 1}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`heading${index + 1}`}
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* FAQ CONTENT */}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="faq-contact-touch">
                  <p>Have more questions?</p>
                  <Link to="/contactUs">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ-PAGE */}
      </main>
      <Footer />
    </>
  );
};

export default Faq;
