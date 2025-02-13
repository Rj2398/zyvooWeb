import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/guestPage/Home";
import AboutUs from "../pages/guestPage/publicPage/AboutUs";
import ContactUs from "../pages/guestPage/publicPage/ContactUs";
import WhyUs from "../pages/guestPage/publicPage/WhyUs";
import Faq from "../pages/guestPage/publicPage/Faq";
import BlogArtical from "../pages/guestPage/publicPage/BlogArtical";
import ArticalDetails from "../pages/guestPage/publicPage/ArticalDetails";
import CreateProfile from "../pages/guestPage/CreateProfile";
import Notifications from "../pages/guestPage/Notifications";
import HelpCenter from "../pages/guestPage/HelpCenter";
import Profile from "../pages/guestPage/Profile";
import WishList from "../pages/guestPage/WishList";
import WishListDetails from "../pages/guestPage/WishListDetails";
import Bookings from "../pages/guestPage/Bookings";
import HostListing from "../pages/guestPage/HostListing";
import Location from "../pages/guestPage/Location";
import ChatHost from "../pages/guestPage/ChatHost";
import AddMoreTime from "../pages/guestPage/AddMoreTime";
import MyPlaces from "../pages/hostPage/MyPlacesHost";
import BookingHost from "../pages/hostPage/BookingHost";
import HostChat from "../pages/hostPage/HostChat";
import PaymentHost from "../pages/hostPage/PaymentHost";

import ProfileHost from "../pages/hostPage/ProfileHost";
import NotificationHost from "../pages/hostPage/Notification-Host";
import HelpCenterHost from "../pages/hostPage/HelpCenterHost";
import TermsCondn from "../pages/guestPage/TermsCondn";
import PrivacyPolicy from "../pages/guestPage/PrivacyPolicy";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/Faq" element={<Faq />} />
      <Route path="/whyus" element={<WhyUs />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/explore-articles" element={<BlogArtical />} />
      <Route path="/articles-detail" element={<ArticalDetails />} />
      <Route path="/articles-detail" element={<ArticalDetails />} />
      <Route path="/create-profile" element={<CreateProfile />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/helpCenter" element={<HelpCenter />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/WishList" element={<WishList />} />
      <Route path="/wishlistDetails" element={<WishListDetails />} />
      <Route path="/booking" element={<Bookings />} />
      <Route path="/booking" element={<Bookings />} />
      <Route path="/host-listing" element={<HostListing />} />
      <Route path="/location" element={<Location />} />
      <Route path="/chathost" element={<ChatHost />} />
      <Route path="/addmoretime" element={<AddMoreTime />} />
      <Route path="/myplaces" element={<MyPlaces />} />
      <Route path="/booking-host" element={<BookingHost />} />
      <Route path="/host-chat" element={<HostChat />} />
      <Route path="/payment-host" element={<PaymentHost />} />
      <Route path="/notification-host" element={<NotificationHost />} />
      <Route path="/Profile-host" element={<ProfileHost />} />
      <Route path="/helpCenterHost" element={<HelpCenterHost />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-condn" element={<TermsCondn />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default Routers;
