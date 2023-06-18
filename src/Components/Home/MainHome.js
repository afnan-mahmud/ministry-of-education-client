import { Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "../Carousel/Carousel";

const MainHome = () => {
  return (
    <>
      <div
        style={{
          background: "#85FFBD",
          backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
          padding: 250,
          borderRadius: 10,
        }}
      >
        <Carousel />
      </div>
      <Grid style={{ paddingTop: 20 }} container spacing={2}>
        <Grid item xs={4}>
          <div
            style={{
              background: "#D9AFD9",
              backgroundImage:
                "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
              padding: 40,
              borderRadius: 10,
            }}
          >
            <Typography variant="h5">Primary and mass Education</Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              background: "#FBAB7E",
              backgroundImage:
                "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
              padding: 40,
              borderRadius: 10,
            }}
          >
            <Typography variant="h5">Secondary School Certificate</Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              background: "#D9AFD9",
              backgroundImage:
                "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
              padding: 40,
              borderRadius: 10,
            }}
          >
            <Typography variant="h5">
              Higher Secondary School Certificate
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MainHome;
