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
    makeStyles,
  } from "@material-ui/core";
  import { Close as CloseIcon } from "@material-ui/icons";
  import React, { useState } from "react";
  import {format} from "date-fns"
//   import db from "../../../firebase";
  import {serverTimestamp} from "firebase/firestore"
import { Navigate, NavLink } from "react-router-dom";

  
  const useStyle =makeStyles({
    indo:{
      '& > *' :{
        margin:'5px'
      } 
    }
  })
  const theme = createTheme({
    typography: {
      caption: {
        color: "red",
      },
    },
  });

  function ViewJob ({state,title,companyname,skills,postedOn,type,location,jobdes}){

    const classes= useStyle();
    const [loading,setloading] =useState(false)

    const apply = (e) => {
      e.preventDefault();
     Navigate("/jobapply");
    };

  return (
    
    
    <Dialog open={true} fullWidth>
        <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
           {title} @ {companyname}
           <NavLink to="/home">
          <IconButton>
            <CloseIcon />
          </IconButton>
          </NavLink>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box className="{classes.info}" display="flex">
          <Typography variant="body15">Posted on:</Typography>
          <Typography variant="body1">{new Date(postedOn?.toDate()).toUTCString()}</Typography>
        </Box>
        <Box className="{classes.info}" display="flex">
          <Typography variant="body5">Job type:</Typography>
          <Typography variant="body1">{type}</Typography>
        </Box>
        <Box className="{classes.info}" display="flex">
          <Typography variant="body5">Job location:</Typography>
          <Typography variant="body1">{location}</Typography>
        </Box>
        <Box className="{classes.info}" display="flex">
          <Typography variant="body5">Job description:</Typography>
          <Typography variant="body1">{jobdes}</Typography>
        </Box>
        <Box className="{classes.info}" display="flex">
          <Typography variant="body5">Company name:</Typography>
          <Typography variant="body1">{companyname}</Typography>
        </Box>
        <Box className="{classes.info}" display="flex">
          <Typography variant="body5">Skills:</Typography>
          <Typography variant="body1">{skills}</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
      <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
         <NavLink to="/jobapply" >
          <Button
            disabled={loading}
            variant="contained"
            disableElevation
            color="primary"
          >
            Apply
          </Button>
          </NavLink>
        </Box>
      </DialogActions>
    </Dialog>
  )
}
export default ViewJob;