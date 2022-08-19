import React from "react";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

const Loading = () => {
  return (
    <Grid
      container
      spacing={{ xs: 3, sm: 3, md: 2, lg: 1 }}
      columns={{ xs: 2, sm: 3, md: 6, lg: 12 }}
    >
      {[...Array(12)].map((_) => {
        return (
          <Grid item xs={2} sm={1} md={1} lg={1}>
            <Skeleton variant="rounded" width="100%" height={210} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Loading;
