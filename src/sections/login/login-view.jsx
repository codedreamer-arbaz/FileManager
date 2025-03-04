// import { useState } from 'react';

// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
// // import Button from '@mui/material/Button';
// // import Divider from '@mui/material/Divider';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import LoadingButton from '@mui/lab/LoadingButton';
// import { alpha, useTheme } from '@mui/material/styles';
// import InputAdornment from '@mui/material/InputAdornment';

// import { useRouter } from 'src/routes/hooks';

// import { bgGradient } from 'src/theme/css';

// import Logo from 'src/components/logo';
// import Iconify from 'src/components/iconify';
// import SideOfLogin from 'src/components/SideofLogin/SideOfLogin';

// // ----------------------------------------------------------------------

// export default function LoginView() {
//   const theme = useTheme();

//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);

//   const handleClick = () => {
//     router.push('/dashboard');
//   };

//   const renderForm = (
//     <>
//       <Stack direct spacing={3}>
//         <TextField name="email" label="Email address" />
      
//         <TextField
//           name="password"
//           label="Password"
//           type={showPassword ? 'text' : 'password'}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                   {/* <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} /> */}
//                   <Iconify icon={showPassword ? 'eva:eye-fill' : 'mage:eye-closed'} />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Stack>

//       <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
//         <Link variant="subtitle2" underline="hover">
//           Forgot password?
//         </Link>
//       </Stack>

//       <LoadingButton
//         fullWidth
//         size="large"
//         type="submit"
//         variant="contained"
//         color="inherit"
//         onClick={handleClick}
//       >
//         Login
//       </LoadingButton>
//     </>
//   );

//   return (
//     <Box
//       sx={{
//         ...bgGradient({
//           color: alpha(theme.palette.background.default, 0.9),
//           imgUrl: '/assets/background/overlay_4.jpg',
//         }),
//         height: 1,
//       }}
//     >
//       <Logo
//         sx={{
//           position: 'fixed',
//           top: { xs: 16, md: 24 },
//           left: { xs: 16, md: 24 },
//         }}
//       />
//       <SideOfLogin
//          sx={{
//           position: "relative",
//           top: { xs: 16, md: 24 },
//           left: { xs: 16, md: 24 },
//         }}
//       />
//       <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
//         <Card
//           sx={{
//             p: 5,
//             width: 1,
//             maxWidth: 420,
//           }}
//         >
//           <Typography variant="h4">Sign in to your account</Typography>

//           <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
//             Don’t have an account?
//             <Link variant="subtitle2" sx={{ ml: 0.5 }}>
//               Get started
//             </Link>
//           </Typography>

//           {/* <Stack direction="row" spacing={2}>
//             <Button
//               fullWidth
//               size="large"
//               color="inherit"
//               variant="outlined"
//               sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
//             >
//               <Iconify icon="eva:google-fill" color="#DF3E30" />
//             </Button>

//             <Button
//               fullWidth
//               size="large"
//               color="inherit"
//               variant="outlined"
//               sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
//             >
//               <Iconify icon="eva:facebook-fill" color="#1877F2" />
//             </Button>

//             <Button
//               fullWidth
//               size="large"
//               color="inherit"
//               variant="outlined"
//               sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
//             >
//               <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
//             </Button>
//           </Stack>

//           <Divider sx={{ my: 3 }}>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//               OR
//             </Typography>
//           </Divider> */}

//           {renderForm}
//         </Card>
//       </Stack>
//     </Box>
//   );
// }
import { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import SideOfLogin from 'src/components/SideofLogin/SideOfLogin';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleClick = () => {
    // router.push('/');
    if (email === 'reactadmin' && password === 'react') {
      router.push('/');
    } else {
      setError('Invalid ID or Password');
    }
  };

  const renderForm = (
    <>
      <Stack direction="column" spacing={3}>
        <TextField name="email" onChange={(e) => setEmail(e.target.value)}
  value={email} label="Email address" error={!!error}/>
      
        <TextField
          name="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'mage:eye-closed'} />
                </IconButton>
              </InputAdornment>
            ),
          }} error={!!error}
          helperText={error}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        Login
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: '100vh',
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Grid 
      container sx={{
         height: '100%'
          }}>
        {/* SideOfLogin Component */}
        <Grid container sx={{
            mt: '155px'
        }} item xs={12} md={6}>

          <SideOfLogin
            sx={{
              height: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </Grid>

        {/* Login Form */}
        <Grid item xs={12} md={6}>
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ height: '100%' }}
          >
            <Card
              sx={{
                p: 5,
                width: 1,
                maxWidth: 420,
              }}
            >
              <Typography variant="h4">Sign in to your account</Typography>

              <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
                Don’t have an account?
                <Link variant="subtitle2" sx={{ ml: 0.5 }}>
                  Get started
                </Link>
              </Typography>

              {renderForm}
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}