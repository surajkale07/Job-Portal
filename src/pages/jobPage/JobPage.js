import React, { useState, useEffect } from "react";
import JobList from "./jobPageComponents/JobList";
import PageTitleBanner from "../../globalComponents/PageTitleBanner";
import Newsletter from "../../globalComponents/Newsletter";
import SearchComponent from "../homePage/homePageComponents/SearchComponent";
import JobPost from "./jobPageComponents/JobPost";
// import jobData from "./Dummydata";
import db from "../../firebase";
import { Box, CircularProgress } from "@material-ui/core";
import {serverTimestamp} from "firebase/firestore"
import ViewJob from "./jobPageComponents/ViewJob";

export default () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true);
  const [newJobModel , setNewJobModel] =useState(false)
  const [ViewJob , setViewJob] =useState([])

  // const fetchJobs = async () => {
  //   const req = await db
  //     .collection("jobs")
  //     .orderBy("postedOn", "desc")
  //     .get();
  //   const tempJobs=req.docs.map((job) => ({ ...job.data(),id: job.id, postedOn: job.data().postedOn.toDate() }));
  //   setJobs(tempJobs);
  //   // console.log(tempJobs);
  // };

  const sendDataToParent = () => { // the callback. Use a better name
    setViewJob(jobs);
  };

  useEffect(() => {
    // fetchJobs();
    db.collection("jobs")
      .orderBy("postedOn", "desc")
      .onSnapshot((snapshot) =>
        setJobs(snapshot.docs.map((doc) => doc.data()))
      );
    setloading(false);
  }, []);
  return (
    <>
      {/* <JobPost/> */}
      <PageTitleBanner title="Job Listing" />
      <div className="container mx-auto px-5 my-5">
        {/* <SearchComponent /> */}
      

        {/* <JobPost  postJob={postJob} />  */}
        {/* {jobs.map((job) => (
          <JobList key={job.id} {...job} />
        ))} */}

        {/* <ViewJob job={ViewJob} classModal={() => setViewJob({})}/> */}

        {loading ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          jobs.map((job) => (
            <JobList

              sendDataToParent={sendDataToParent}
              title={job.title}
              companyname={job.companyname}
              skills={job.skills}
              postedOn={job.postedOn}
              type={job.type}
              location={job.location}
              id={job.id}
            />
          ))
        )}

        {/* <JobList />
        <JobList /> */}
      </div>

      {/* <Newsletter /> */}
    </>
  );
};

// export default job;
