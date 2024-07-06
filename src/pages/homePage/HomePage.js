import React from "react";
import ReviewMain from "./homePageComponents/ReviewMain";
import HowItWork from "../../globalComponents/HowItWork";
import BrowseJobsBanner from "./homePageComponents/BrowseJobsBanner";
import Banner from "./homePageComponents/Banner";
import Newsletter from "../../globalComponents/Newsletter";
import Categories from "./homePageComponents/Categories";
import FeatureJobs from "./homePageComponents/FeatureJobs";
import Blogs from "./homePageComponents/Blogs";
import ProfileBanner from "./homePageComponents/ProfileBanner";

const HomePage = () => {
  return (
    <>
      <Banner />
    
      <BrowseJobsBanner />
      <HowItWork />
      {/* <ProfileBanner /> */}
      {/* <Blogs /> */}
      {/* <ReviewMain /> */}
      {/* <Newsletter /> */}
    </>
  );
};

export default HomePage;
