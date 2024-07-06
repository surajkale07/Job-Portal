import React ,{ useState, useEffect } from "react";
import ViewJob from "./ViewJob";
import db from "../../../firebase";
import { useLocation } from "react-router-dom";

export default () => {

    const [jobs, setJobs] = useState([]);
    const location= useLocation();
    useEffect(() => {
      // fetchJobs();
      
      db.collection("jobs")
        .where('id', '==' , location.state.data)
        .limit(5)
        .get()
        .then((collections) =>{
          const auto = collections.docs.map((res) => res.data())
        setJobs(auto)
      });
     
  
    }, []);

    return(
        jobs.map((job) => (
        <ViewJob 
            title={job.title}
            companyname={job.companyname}
            postedOn={job.postedOn}
            type={job.type}
            location={job.location}
            jobdes={job.jobdes}
            skills={job.skills}
        />
        ))
    );

};