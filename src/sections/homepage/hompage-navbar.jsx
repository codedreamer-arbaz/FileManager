
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';

// import { RouterLink } from 'src/routes/components';

import Logo from 'src/components/logo';

export default function HomePageNavbar() {
    const navigate = useNavigate();
    const handleSignInClick = () => {
      navigate('/login'); // Redirect to the login component
    };
const renderHeader = (
    <Box  sx={{ position: 'relative', width: '100%' }}>
         <Stack
      direction="row"
      spacing={2}
      sx={{  position: 'absolute',
        top: 0,
        right: 0,
        padding: '10px 20px',
        backgroundColor: '#ffffff',
        zIndex: 10, // Ensure it's above other elements
        // boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', 
    }}
    >
      <Button href="/" sx={{color:'black'}}>
        Home
      </Button>
      <Button href="/components" sx={{color:'black'}}>
        Component
      </Button>
      <Button href="/pages" sx={{color:'black'}}>
        Pages
      </Button>
      <Button variant='outlined' onClick={handleSignInClick} sx={{color:'black',background:'white',border:'block black'}}>
        Sign In
      </Button>
    </Stack>
    <Box
      component="header"
      sx={{
        top: 0,
        left: 0,
        width: 1,
        lineHeight: 0,
        position: 'fixed',
        p: (theme) => ({ xs: theme.spacing(3, 3, 0), sm: theme.spacing(5, 5, 0) }),
      }}
    >
      <Logo />
    </Box>
    </Box>
   
  );
  return (
    <>
            {renderHeader}
    </>
  )
}