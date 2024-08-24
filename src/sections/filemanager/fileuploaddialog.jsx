import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import Iconify from 'src/components/iconify';
// import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const fileInputRef = React.useRef(null);

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <Button onClick={handleClickOpen} variant="contained" sx={{ backgroundColor: 'black' }}>
          <Iconify icon="eva:cloud-upload-fill" />
          Upload
        </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Upload Files
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon /> */}
        </IconButton>
        <DialogContent dividers>
            <Box onClick={handleBoxClick} sx={{position:'relative',padding:'80px 160px',border:'1px dashed #CBCBCA',borderRadius:'8px',backgroundColor:'#f5f7fa'}}>
            <input ref={fileInputRef} multiple type="file" hidden />
            <img alt="folder" src="/assets/icons/folder.png" style={{ marginLeft:'32px',height:'80px',alignItems:'center' }} />
                <Stack spacing={2} direction='column'>
                <Typography sx={{variant:'h4',fontWeight:'bold',marginTop:'10px',textAlign:'center'}}>Drop or Select Files</Typography>
                
                {/* <Typography variant='body1'>Drop files here or click to browsethrough your machine.</Typography> */}
                </Stack>
            </Box>
        </DialogContent>
        <DialogActions>
        <Button variant="contained" sx={{ backgroundColor: 'black' }}>
          <Iconify icon="eva:cloud-upload-fill" />
          Upload
        </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}