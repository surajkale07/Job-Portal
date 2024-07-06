import {
  Dialog,
  DialogContent,
  DialogTitle,
  FilledInput,
  MenuItem,
  Grid,
  Select,
  DialogActions,
  Box,
  Typography,
  Button,
  ThemeProvider,
  createTheme,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import React, { useState } from "react";
import db, { auth } from "../../../firebase";
import {doc, serverTimestamp} from "firebase/firestore"
import { NavLink } from "react-router-dom";

const theme = createTheme({
  typography: {
    caption: {
      color: "red",
    },
  },
});



export default (props) => {
  const [loading,setloading] =useState(false)
  const [title, settitle] = useState("");
  const [id, setId] = useState("");
  const [companyname, setcompanyname] = useState("");
  const [type, settype] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [jobdes, setjobdes] = useState("");
  const [contact, setcontact] = useState("");

  const post = (e) => {
    

      e.preventDefault();
      db.collection("jobs").add({
      postedOn: serverTimestamp(),
      title: title,
      id: id,
      companyname: companyname,
      type: type,
      location: location,
      skills: skills,
      jobdes: jobdes,
      contact:contact
      
    }); 
    
  };



  return (
    <Dialog open={true} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="right">
          Post Job
          <NavLink to="/home">
          <IconButton>
            <CloseIcon />
          </IconButton>
          </NavLink>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
            onChange={(e) => settitle(e.target.value)}
              autoComplete="off"
              name="title"
              value={title}
              placeholder="Job title *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
            onChange={(e) => setId(e.target.value)}
              autoComplete="off"
              name="id"
              value={id}
              placeholder="Job Id *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
            onChange={(e) => setcompanyname(e.target.value)}
              autoComplete="off"
              placeholder="Company Name *"
              disableUnderline
              fullWidth
              multiline
              name="companyname"
              value={companyname}
            />
          </Grid>

          <Grid item xs={6}>
            <Select
            onChange={(e) => settype(e.target.value)}
              fullWidth
              disableUnderline
              variant="filled"
              name="type"
              value={type}
            >
              <MenuItem value="Full time"> Full time</MenuItem>
              <MenuItem value="Part time"> Part time</MenuItem>
              <MenuItem value="Contract"> Contract</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <Select
            onChange={(e) => setLocation(e.target.value)}
              fullWidth
              disableUnderline
              variant="filled"
              name="location"
              value={location}
              placeholder="Location"
            >
              <MenuItem value="Remote"> Remote</MenuItem>
              <MenuItem value="In-office"> In-office</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <FilledInput
            onChange={(e) => setSkills(e.target.value)}
              name="skills"
              value={skills}
              autoComplete="off"
              placeholder="Skills *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
            onChange={(e) => setjobdes(e.target.value)}
              autoComplete="off"
              placeholder="Job Description *"
              disableUnderline
              fullWidth
              multiline
              rows={4}
              name="jobdes"
              value={jobdes}
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
            onChange={(e) => setcontact(e.target.value)}
              autoComplete="off"
              placeholder="Contact Us *"
              disableUnderline
              fullWidth
              multiline
              name="contact"
              value={contact}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <ThemeProvider theme={theme}>
            <Typography variant="caption">*Required fields</Typography>
          </ThemeProvider>
          <Button
            disabled={loading}
            variant="contained"
            disableElevation
            color="primary"
            onClick={post}
          >
            {loading ? ( <CircularProgress color=" primary" size={22} />
               ) :  (
                "Post job"
              )}
            
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
