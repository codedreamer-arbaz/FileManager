import React from 'react'

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

import { RouterLink } from 'src/routes/components';
// import { useTheme } from '@mui/material/styles';

const SideOfLogin = () => {

    const logo = (
        <Box
          component="img"
          // src="/logo/logo_single.svg" 
          src="/public/assets/images/illustration-dashboard.webp" 
          sx={{ width: 420, height: 360, cursor: 'pointer' }}
       
        />

      );
    

  return (
    <Box>
    <Typography variant="h4" sx={{color:'black',mx:'75px'}}>Hi, Welcome back</Typography>
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
    </Box>
   
  )

}

export default SideOfLogin