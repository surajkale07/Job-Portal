import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import JobPost from "./pages/jobPage/jobPageComponents/JobPost";
import ViewJob from "./pages/jobPage/jobPageComponents/ViewJob";
import JobDetails from "./pages/jobPage/jobPageComponents/JobDetails";
import JobApply from "./pages/jobPage/jobPageComponents/JobApply";

const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const Footer = lazy(() => import("./globalComponents/Footer"));
const Navbar = lazy(() => import("./globalComponents/Navbar"));
const AboutPage = lazy(() => import("./pages/aboutPage/AboutPage"));
const ContactPage = lazy(() => import("./pages/contactUsPage/ContactPage"));
const Login = lazy(() => import("./pages/loginPage/Login"));
const Register = lazy(() => import("./pages/registerPage/Register"));
const BlogsPage = lazy(() => import("./pages/blogsPage/BlogsPage"));

const JobPage = lazy(() => import("./pages/jobPage/JobPage"));

const SearchPage = lazy(() => import("./pages/searchPage/SearchPage"));
function App() {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="flex justify-center mx-auto">
            {/*======================== Please don't remove it cause root level lazy loader ========================*/}
            <InfinitySpin width="300" color="#4fa94d" />
          </div>
        }>
        <Routes>
          {/*======================== public Page routes start ========================*/}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/jobs" element={<JobPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<SearchPage />} />

          <Route path="/postjob" element={<JobPost/>} />
          <Route path="/jobdetails" element={<JobDetails/>} />
          <Route path="/jobapply" element={<JobApply/>} />


        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
