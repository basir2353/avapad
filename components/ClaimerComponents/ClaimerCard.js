import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import styles from "../../styles/HomePage.module.css";
const ClaimerCard = (props) => {
  return (
    <>
      <Box className={styles.cardClaimer}>
        <Box>
          <Typography pb='5rem' sx={{fontWeight:'bolder'}} variant="h5">Distribution {props.data}</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" sx={{fontSize:'12px',color:'gray'}}>Token Name </Typography>
          <Typography variant="subtitle1" sx={{fontSize:'12px',color:'gray'}}>Token Symbol </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">AKITAVAX </Typography>
          <Typography variant="h6">AKITAX </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" sx={{fontSize:'12px',color:'gray'}}>Token Address </Typography>
          <Typography variant="subtitle1" sx={{fontSize:'12px',color:'gray'}}>Token Decimils</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">0xE06f...08af </Typography>
          <Typography variant="h6">18 </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ClaimerCard;
