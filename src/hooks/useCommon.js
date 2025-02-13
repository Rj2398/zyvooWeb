import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { setUserInfo } from "../store/slices/userSlice";

import { api } from "../utils/api";

import { useState } from "react";
import { KEYS } from "../config/Constant";
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

  const isLoading = manualLoading;
  return {
    registerUser,
    isLoading,
    numOtpVerify,
  };
}
