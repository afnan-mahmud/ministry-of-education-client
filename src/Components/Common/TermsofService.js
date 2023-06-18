import { Grid } from "@mui/material";
import React from "react";
import Mainmenu from "../Mainmenu/Mainmenu";

const TermsofService = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Mainmenu />
        </Grid>
        <Grid style={{ padding: 50 }} item xs={9.7}>
          <p>This is Terms of Service page</p>
        </Grid>
      </Grid>
    </>
  );
};

export default TermsofService;
