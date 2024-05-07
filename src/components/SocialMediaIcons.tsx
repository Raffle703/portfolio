import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const SocialMediaIcons: React.FC = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <IconButton aria-label="GitHub" onClick={() => window.open('https://github.com/Raffle703')}>
        <GitHub />
      </IconButton>
      <IconButton aria-label="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/rahul-abr/')}>
        <LinkedIn />
      </IconButton>
    </Grid>
  );
};

export default SocialMediaIcons;
