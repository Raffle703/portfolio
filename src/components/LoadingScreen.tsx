import React from 'react';
import { Grid, CircularProgress, Typography } from '@mui/material';

const LoadingScreen: React.FC = () => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      gap={3}
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Grid item>
        <Typography variant="h3" align="center">
          Welcome
        </Typography>
      </Grid>
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default LoadingScreen;
