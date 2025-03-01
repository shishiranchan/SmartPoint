import { Box, Typography } from "@mui/material";
import React from "react";
import bgIma from "../Assets/Images/smartpointdesign.webp";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: `url(${bgIma})`,
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "50px" },
            textTransform: "uppercase",
            textAlign: "left", // Align text to the left
            width: "100%", // Ensure it takes up full width to apply left alignment
            color: "#000000b8",
          }}
          gutterBottom
        >
          Welcome to<br/> Smart point
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "800", fontSize: "20px", color: "#000000b8",textAlign: "left" }}
        >
          
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "000000b8",textAlign: "left" }}
        >Address :<br/>

          Near pinto complex , Bantwal ,574211 D K
        </Typography>
      </Box>
    </Box>
  );
}
