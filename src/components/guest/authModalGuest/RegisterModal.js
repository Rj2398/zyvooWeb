import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

import { CountryDropdown } from "react-country-region-selector";
import VerificationModal from "./VerificationModal";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ForgotWithEmail from "./ForgotWithEmail";
import EmailLoginModal from "./LoginWithEmail";
import Loader from "../../Loader";

function RegisterModal(props) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, numOtpVerify, LoginWithPhone, isLoading } = useAuth();

  //

  const [switchLogin, setSwitchLogin] = useState(false);

  //
  const [logigWithEmailModle, setLoingWithEmailModle] = useState(false);

  //
  const [selectedCountry, setSelectedCountry] = useState("India"); // Default country
  //

  //
  const [forgotEmailModal, setForgotemailModal] = useState(false);

  const [vefiModl, setVefiModl] = useState(false);
  const [LoginVerification, setloginVerification] = useState(false);
  //
  const countryCodes = {
    India: "+91",
    USA: "+1",
    UK: "+44",
    Canada: "+1",
    Australia: "+61",
  };
  const onSubmit = async (data, event) => {
    event?.preventDefault();

    // Only proceed if there are no errors
    if (Object.keys(errors)?.length === 0) {
      try {
        const response = props?.loginModal
          ? await registerUser({
              phone_number: data?.phoneNumber, // Use dynamic value
              country_code: countryCodes[selectedCountry],
              fcm_token: "bfbfb498b4644",
              device_type: "web",
            })
          : await LoginWithPhone({
              phone_number: data?.phoneNumber, // Use dynamic value
              country_code: countryCodes[selectedCountry],
              fcm_token: "bfbfb498b4644",
              device_type: "web",
            });
        if (response) {
          if (props?.loginModal) {
            console.log(response, "response of register modal");
            props?.CallBack(false);
            setVefiModl(true);
          } else {
            setloginVerification(true);
            props?.CallBack(false);
            setVefiModl(true);
            console.log(response, "response of user phone number");
            // navigate("/create-profile");
          }
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Loader visible={isLoading} />
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="w-100 text-center"
          >
            {props?.loginModal ? "Register Now" : "Login"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h3>Welcome to Zyvo</h3>
          <p>
            {props?.loginModal
              ? "Enter your phone number to register your account."
              : "Enter your phone number to login your account."}
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="custom-modal-label d-flex justify-content-center align-items-center gap-2">
              {/* Country Picker */}
              <CountryDropdown
                value={selectedCountry}
                onChange={(val) => setSelectedCountry(val)}
                style={{
                  width: "10%",
                  fontSize: "14px",
                  padding: "5px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  height: "40px",
                }}
              />
              {/* Phone Number Input */}
              <input
                type="tel"
                id="mobile_code"
                placeholder="Enter your number here"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number must be exactly 10 digits",
                  },
                })}
                className="form-control text-center"
                style={{ width: "300px", height: "40px" }}
              />
            </div>
            {errors.phoneNumber && (
              <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
            )}

            <div className="custom-modal-label mt-3">
              <Button
                type="submit"
                className="w-50"
                style={{ backgroundColor: "#4AEAB1", borderRadius: "20px" }}
              >
                Continue
              </Button>
            </div>
            {!props?.loginModal && (
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <span>remember me</span>
                <span
                  onClick={() => {
                    setForgotemailModal(true);
                    props?.onHide();
                  }}
                >
                  Forgot password
                </span>
              </div>
            )}
          </form>

          <hr />
          <p>-OR-</p>
          <p>Login with</p>
          <div className="login-with-icons d-flex justify-content-center">
            {/* <ul className="list-unstyled d-flex gap-3">
              {["google", "facebook", "apple", "mail"].map((provider) => (
                <li key={provider}>
                  <a href="#">
                    <img
                      src={`https://design.yilstaging.com/ZYVO/assets/images/popups/${provider}.svg`}
                      alt={`${provider} Login`}
                      width="40"
                    />
                  </a>
                </li>
              ))}
            </ul> */}

            <ul className="list-unstyled d-flex gap-3">
              {["google", "facebook", "apple", "mail"].map((provider) => (
                <li key={provider}>
                  <a
                    href="#"
                    onClick={(e) => {
                      if (provider === "mail") {
                        e.preventDefault();

                        if (props?.loginModal) {
                          setLoingWithEmailModle(true);

                          props?.onHide();
                          setSwitchLogin(false);
                        } else {
                          setLoingWithEmailModle(true);

                          props?.onHide();
                          setSwitchLogin(true);
                        }
                      }
                    }}
                  >
                    <img
                      src={`https://design.yilstaging.com/ZYVO/assets/images/popups/${provider}.svg`}
                      alt={`${provider} Login`}
                      width="40"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <hr />
          <p>Already have an account?</p>
          <div className="bottom-btn">
            <Button
              variant="link"
              onClick={() => {
                props.onHide();
              }}
            >
              Login Here
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <VerificationModal
        show={vefiModl}
        onHide={() => setVefiModl(false)}
        LoginVerification={LoginVerification}
      />
      <ForgotWithEmail
        show={forgotEmailModal}
        handleClose={() => setForgotemailModal(false)}
      />
      <EmailLoginModal
        show={logigWithEmailModle}
        handleClose={() => {
          setLoingWithEmailModle(false);
        }}
        toggleModel={switchLogin}
      />
    </>
  );
}

export default RegisterModal;
