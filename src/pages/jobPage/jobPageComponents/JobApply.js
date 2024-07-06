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
import db, { auth, storage } from "../../../firebase";
import {doc, serverTimestamp} from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {v4} from "uuid";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

const theme = createTheme({
  typography: {
    caption: {
      color: "red",
    },
  },
});



export default (props) => {
  const [loading,setloading] =useState(false)
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [contactno, setcontactno] = useState("");
  const [workexp, setworkexp] = useState("");
  const [proj, setproj] = useState("");

   const [resumeFile, setResumeFile] = useState(null);
  const [resumeUrl, setResumeUrl] = useState('');

  const navigate= useNavigate();

   const handleResumeUpload = (e) => {
    // if (resumeFile == null) return;

    const resumeref= ref(storage ,`resume/${"resume"}.pdf`);
    uploadBytes(resumeref ,resumeFile).then((snaphsot) => {
      alert("File uploaded successfully");
      getDownloadURL(snaphsot.ref).then((url) => {
        console.log(url);
        setResumeUrl(url);
      })
      // var downloadURL = resumeFile.getDownloadURL();
      // var url =downloadURL.toString();
        
    })
   
  };

  const apply = (e) => {
    
    e.preventDefault();
    db.collection("applications").add({
      postedOn: serverTimestamp(),
      fullname: fullname,
      email: email,
      contactno: contactno,
      workexp: workexp,
      proj:proj,
      resumeUrl: resumeUrl
    });    
    window.alert("Applied successfully");
    navigate('/jobs');
  };



  return (
    <Dialog open={true} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="right">
          Apply for Job
          <NavLink to="/home">
          <IconButton>
            <CloseIcon />
          </IconButton>
          </NavLink>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FilledInput
            onChange={(e) => setfullname (e.target.value)}
              autoComplete="off"
              name="fullname"
              value={fullname}
              placeholder="Full Name *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
            onChange={(e) => setemail(e.target.value)}
              autoComplete="off"
              name="email"
              value={email}
              placeholder="Email Address *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
            onChange={(e) => setcontactno(e.target.value)}
              autoComplete="off"
              placeholder="Contact no. *"
              disableUnderline
              fullWidth
              multiline
              name="contactno"
              value={contactno}
            />
          </Grid>

          <Grid item xs={12}>
            <FilledInput
            onChange={(e) => setworkexp(e.target.value)}
              autoComplete="off"
              placeholder="Past Work Experience *"
              disableUnderline
              fullWidth
              multiline
              rows={4}
              name="workexp"
              value={workexp}
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
            onChange={(e) => setproj(e.target.value)}
              autoComplete="off"
              placeholder="Any Project which you worked on ? "
              disableUnderline
              fullWidth
              multiline
              rows={4}
              name="proj"
              value={proj}
            />
          </Grid>
          
          <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          >
          <input type="file"  />
            <button 
              className="btn rounded-none border-0 duration-700 bg-[#048cbc] hover:bg-accent text-white font-bold px-4"
              variant="contained"
              color="primary"
              onClick={handleResumeUpload} >Upload File</button>
          </Box>
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
            onClick={apply}
          >
            {loading ? ( <CircularProgress color=" primary" size={22} />
               ) :  (
                "Submit"
              )}
            
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
