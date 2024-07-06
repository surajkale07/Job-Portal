import { Box, Button, Grid, Typography , makeStyles, colors} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useGetAllJobsQuery } from "../../../features/job/jobApi";
import JobPlaceholder from "../../../utils/JobPlaceholder";
// import JobListCard from "./JobListCard";
import {differenceInMinutes} from "date-fns";
import ViewJob from "./ViewJob";
import { NavLink } from "react-router-dom";
import db from "../../../firebase";


// const skills=["javascript", "reactjs"];
  const useStyle =makeStyles({
    wrapper:{
      border: "1px solid #e8e8e8",
      padding:  "10px",
      transition: ".3s",
      height: "100px",

      "&:hover":{
        boxShadow: "0px 5px 25px rgba(0,0,0,0.1)",
        borderLeft: "6px solid #4D64E4",
      },
    },
    format:{
      fontSize :"30px"
    },
    CompanyName: {
      fontSize :"15px",
      backgroundColor : "#048cbc",
      padding:  "6px",
      borderRadius: "5px",
      display: "inline-block ",
      fontWeight: 600,
      color:"#fff"
    },
    Skillchip: {
      margin: "4px",
      padding:"6px",
      fontSize: "14.5px",
      borderRadius: "5px",
      fontWeight: 600,
      backgroundColor: "#048cbc",
      color:"#fff"
    },
  });

function JobList ({sendDataToParent,title,companyname,skills,postedOn,type,location,id }){
  // const {
  //   data: jobs,
  //   isLoading,
  //   // isSuccess,
  //   // isError,
  //   // error
  // } = useGetAllJobsQuery("getJobs");

  // console.log(jobs);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    // fetchJobs();
    db.collection("jobs")
      .orderBy("postedOn", "desc")
      .onSnapshot((snapshot) =>
        setJobs(snapshot.docs.map((doc) => doc.data()))
      );

  }, []);


  
  const classes =useStyle();
  return (
  

    <section className="py-5">
      {/* <div className="container mx-auto px-5">
        {isLoading ? (
          <JobPlaceholder />
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {jobs?.Jobs.map((job) => (
              <JobListCard key={job._id} job={job} />
            ))}
          </div>
        )} */}
        

        {/* <div className="flex justify-center pt-16">
          <div className="btn-group gap-1">
            <button className="btn-[#048cbc] active hover:marker:border-secondary btn-md text-white">
              Prev
            </button>
            <button className="bg-[#048cbc] hover:bg-accent btn-md text-white">
              1
            </button>
            <button className="bg-[#048cbc] hover:bg-accent btn-md text-white">
              2
            </button>
            <button className="bg-[#048cbc] hover:bg-accent btn-md text-white">
              3
            </button>
            <button className="bg-[#048cbc] hover:bg-accent btn-md text-white">
              Next
            </button>
          </div>
        </div>
      </div> */}

      <Box p={2} className={classes.wrapper}>
        <Grid container    alignItems="center"   justifyContent="center" >
          <Grid item xs>
            <Typography className={classes.format} varient="subttitle1">{title}</Typography>
            <Typography className={classes.CompanyName} varient="subttitle1">{companyname}</Typography>
          </Grid>
          <Grid item container xs>
            {/* {skills ?.map((skill)=>(
                <Grid key={skill} item className={classes.Skillchip}>
                  {skill}
                </Grid>
              ))} */}
              <Typography className={classes.Skillchip} > {skills}</Typography>
          </Grid>
          <Grid item container direction="column" alignItems="flex-end" xs>
            <Grid item>
              <Typography variant="caption">
                {/* {differenceInMinutes(Date.now().props.postedOn)}  */}
                {new Date(postedOn?.toDate()).toUTCString()} min ago | {type} | {location}
              </Typography>
            </Grid>
            <Grid item>
              <Box mt={2}>
                <NavLink to="/jobdetails" state={{data: id}}>
              <Button className={classes.CompanyName} varient="outlined"
              // onClick={
              //   <ViewJob 
              //       titles={title}
              //   />
              //   // </NavLink>
              // }
              >Check</Button>
              </NavLink>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default JobList;
