import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import HomePageNavbar from './hompage-navbar';

export default function HomePageView() {
  

  return (
    <div>

      <Container>
      <HomePageNavbar/>

        <Box
          sx={{
            py: 12,
            maxWidth: 480,
            mx: 'auto',
            display: 'flex',
            minHeight: '100vh',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            Welcome to File Manager
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero eos explicabo, quas quo veniam cupiditate aliquid sint voluptate non voluptatibus.
          </Typography>

          <Box
            component="img"
            src="/assets/illustrations/filemanager.jpeg"
            sx={{
              mx: 'auto',
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />

          {/* <Button href="/" size="large" variant="contained" component={RouterLink}>
            Go to Home
          </Button> */}
        </Box>
      </Container>
    </div>
  );
}
