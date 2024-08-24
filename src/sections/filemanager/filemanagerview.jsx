import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import { Stack, TextField, InputAdornment } from '@mui/material';

import Iconify from 'src/components/iconify';

import DataTable from './filemanagertable';
import CustomizedDialogs from './fileuploaddialog';

export default function FileManagerView() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Stack spacing={4}>
        {/* <Button
  variant="contained"
  component="label"
>
  Upload File
  <input
    type="file"
    hidden
  />
</Button> */}
      <Stack spacing={120} direction="row">
        <Typography variant="h4">File manager</Typography>
        {/* <Button variant="contained" sx={{ backgroundColor: 'black' }}>
          <Iconify icon="eva:cloud-upload-fill" />
          Upload
        </Button> */}
        <CustomizedDialogs/>

      </Stack>
      <Stack spacing={6} direction="row">
        <TextField
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="ri:search-line" />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          color="primary"
          sx={{ border: '1px solid', borderRadius: '8px', background: 'white' }}
        />
      </Stack>
      <DataTable searchTerm={searchTerm} />
    </Stack>
  );
}