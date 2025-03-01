import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: "#cfcfcfba",
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 6,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={15} textAlign="center">
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 5 } }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", textTransform: "uppercase", textAlign:"center" }} // Apply lowercase
            >
              Find More, Spend Less
            </Typography>
            <Grid item xs={12} md={11} textAlign="center" >
            <Typography
              variant="body1"
              sx={{
                textTransform: "lowercase", // Apply lowercase
                color: { xs: "white", sm: "#212121" },
                fontWeight: "bold",
                pb: 3,
              }}
            >
              come visit us today and enjoy the convenience of finding everything
              you need in one place. at smart point, we make shopping easy,
              affordable, and enjoyable!
            </Typography></Grid>
          </Box>
        </Grid>

        {/* Right Content (Empty for Now) */}
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
