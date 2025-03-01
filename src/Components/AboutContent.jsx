import { Box, Grid, Typography } from "@mui/material";
import React from "react";
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid
        container
        spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px", alignItems: "center" }}
      >
        <Grid
          item
          xs={12}
          sm={3} // Adjust width of logo column
          sx={{
            display: "flex",
            justifyContent: "flex-start", // Align logo to the left
          }}
        >
          <img
            src="smartpointlogo.webp"
            alt="picture"
            style={{ width: "100%", height: "auto", borderRadius: "20px" }} // Adjust image size to take up less space
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={9} // Adjust width of text column to take up more space
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center", // Align text vertically to the center
            textAlign: "left",
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom sx={{ fontWeight: "900", fontSize: "32px" }}>
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: "700", fontSize: "16px" }}>
              subtitle of website
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ fontSize: "14px" }}>
            At Smart Point, we take pride in offering a wide range of products 
            that cater to all your needs under one roof. From fresh groceries 
            and household essentials to the latest in electronics, fashion, and
             lifestyle, we have everything you're looking for. Our carefully curated
              selection ensures you can find the best quality items at competitive 
              prices, all in one convenient place.
              Looking for something specific? We’ve got you covered! Whether it’s the freshest produce,
               the latest tech gadgets, or stylish apparel, Smart Point is your trusted source.
                We also offer a wide range of home and kitchen essentials, personal care items,
                 and more. With an unbeatable selection of products, competitive prices,
                  and friendly customer service, shopping at Smart Point is always a smart choice
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
