import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { setUserInfo } from "../store/slices/userSlice";

import { api } from "../utils/api";

import { useState } from "react";
// import { KEYS } from "../config/Constant";

export default function useAuth() {
  const dispatch = useDispatch();
  const [manualLoading, setManualLoading] = useState(false);

  const { mutateAsync: registerUser } = useMutation({
    mutationKey: ["signup_phone_number", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await api.post("signup_phone_number", payload);
        const { data } = response;
        console.log(data?.data, "data comes form api hitting");
        // const access_token = data?.token;
        // const user_id = data?.data?.id;

        if (data?.data) {
          // Save user data to localStorage
          // localStorage.setItem(
          //   KEYS.USER_INFO,
          //   JSON.stringify({
          //     access_token,
          //     user_id,
          //   })
          // );

          // Dispatch user info to Redux store after a slight delay
          setTimeout(() => {
            dispatch(setUserInfo(data?.data));
          }, 1000);
        }

        return {
          ...data,
          message: data?.message,
        };
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An unknown error occurred";
        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  const { mutateAsync: numOtpVerify } = useMutation({
    mutationKey: [`otp_verify_signup_phone`, "logout"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await api.post("otp_verify_signup_phone", payload);

        const { data } = response;

        return {
          ...data?.data,
        };
      } catch (error) {
        setManualLoading(false);
        console.log(error, "error message codes");
        const errorMessage =
          error.response?.data?.message || // Custom error from API
          error.message || // Default error message
          "An unknown error occurred";

        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });
  //

  const { mutateAsync: LoginWithPhone } = useMutation({
    mutationKey: [`login_phone_number`, "logout"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await api.post("login_phone_number", payload);

        const { data } = response;
        if (data?.data) {
          // Save user data to localStorage
          // localStorage.setItem(
          //   KEYS.USER_INFO,
          //   JSON.stringify({
          //     access_token,
          //     user_id,
          //   })
          // );

          console.log(data?.data, "user login ********");
          // Dispatch user info to Redux store after a slight delay
          setTimeout(() => {
            dispatch(setUserInfo(data?.data));
          }, 1000);
        }
        return {
          ...data?.data,
        };
      } catch (error) {
        setManualLoading(false);
        console.log(error, "error message codes");
        const errorMessage =
          error.response?.data?.message || // Custom error from API
          error.message || // Default error message
          "An unknown error occurred";

        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  //

  const { mutateAsync: otp_verify_login_phone } = useMutation({
    mutationKey: [`otp_verify_login_phone`, "logout"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await api.post("otp_verify_login_phone", payload);

        const { data } = response;

        return {
          ...data?.data,
        };
      } catch (error) {
        setManualLoading(false);
        console.log(error, "error message codes");
        const errorMessage =
          error.response?.data?.message || // Custom error from API
          error.message || // Default error message
          "An unknown error occurred";

        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });
  //

  const { mutateAsync: forgot_password_email } = useMutation({
    mutationKey: [`forgot_password`, "logout"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await api.post("forgot_password", payload);

        const { data } = response;
        if (data?.data) {
          // Dispatch user info to Redux store after a slight delay
          setTimeout(() => {
            dispatch(setUserInfo(data?.data));
          }, 1000);
        }
        return {
          ...data?.data,
        };
      } catch (error) {
        setManualLoading(false);
        console.log(error, "error message codes");
        const errorMessage =
          error.response?.data?.message || // Custom error from API
          error.message || // Default error message
          "An unknown error occurred";

        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });
  //

  const { mutateAsync: otp_verify_forgot_password } = useMutation({
    mutationKey: [`otp_verify_forgot_password`, "logout"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await api.post("otp_verify_forgot_password", payload);

        const { data } = response;

        return {
          ...data?.data,
        };
      } catch (error) {
        setManualLoading(false);
        console.log(error, "error message codes");
        const errorMessage =
          error.response?.data?.message || // Custom error from API
          error.message || // Default error message
          "An unknown error occurred";

        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });
  //

  const { mutateAsync: reset_password } = useMutation({
    mutationKey: [`otp_verify_forgot_password`, "logout"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await api.post("reset_password", payload);

        const { data } = response;

        return {
          ...data?.data,
        };
      } catch (error) {
        setManualLoading(false);
        console.log(error, "error message codes");
        const errorMessage =
          error.response?.data?.message || // Custom error from API
          error.message || // Default error message
          "An unknown error occurred";

        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  const isLoading = manualLoading;
  return {
    registerUser,
    isLoading,
    numOtpVerify,
    LoginWithPhone,
    otp_verify_login_phone,
    forgot_password_email,
    otp_verify_forgot_password,
    reset_password,
  };
}
