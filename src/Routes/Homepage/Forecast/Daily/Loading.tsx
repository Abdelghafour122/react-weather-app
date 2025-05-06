import React from "react";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

const Loading = () => {
  return (
    <Grid
      container
      spacing={{ xs: 3, sm: 3, md: 3, xl: 1 }}
      columns={{ xs: 2, sm: 8, md: 16, xl: 16 }}
      sx={{ width: "100%", alignSelf: "center" }}
    >
      {[...Array(8)].map((_, index) => {
        return (
          <Grid key={index} item xs={2} sm={4} md={4} xl={2}>
            <Skeleton variant="rounded" width="100%" height={350} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Loading;
