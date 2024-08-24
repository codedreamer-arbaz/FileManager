import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { Menu,Paper,Button,MenuItem } from '@mui/material';

import Iconify from 'src/components/iconify';



export default function DataTable({ searchTerm }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [bookmarkIcons,setBookmarkIcons] = useState({});
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const changeBookmarkIcon = (id) => {
    setBookmarkIcons((prevIcons) => ({
      ...prevIcons,
      [id]: prevIcons[id] === 'twemoji:star' ? 'eva:star-outline' : 'twemoji:star',
    }));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 400,
      renderCell: (params) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {params.row.type === 'folder' ? (
            <img alt="folder" src="/assets/icons/ic-folder.svg" style={{ marginRight: 8 }} />
          ) : (
            <img alt="img file" src="/assets/icons/ic-img.svg" style={{ marginRight: 8 }} />
          )}
          {params.value}
        </div>
      ),
    },
    { field: 'size', headerName: 'Size', width: 130 },
    { field: 'type', headerName: 'Type', width: 130 },
    {
      field: 'modified',
      headerName: 'Modified',
      width: 200,
    },
    {
      field: 'shared',
      headerName: 'Shared',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
    },
    {
      field: 'star',
      headerName: '',
      description: 'This column has a value getter and is not sortable.',
      width: 5,
      renderCell: (params) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button onClick={() => changeBookmarkIcon(params.row.id)}>
            <Iconify icon={bookmarkIcons[params.row.id] || 'twemoji:star'} />
          </Button>
        </div>
      ),
    },
    {
      field: 'threedots',
      headerName: '',
      description: 'This column has a value getter and is not sortable.',
      width: 5,
      renderCell: () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button sx={{ color: 'black' }}  onClick={handleClick}>
            <Iconify icon="ph:dots-three-vertical-bold" />
          </Button>
        </div>
      ),
    },
  ];
  
  const rows = [
    { id: 1, name: 'Docs', size: '2.24 Gb', type: 'folder', modified: '22-Aug-24' },
    { id: 2, name: 'Projects', size: '381.47 Mb', type: 'folder', modified: '22-Aug-24' },
    { id: 3, name: 'Sport', size: '1.12 Gb', type: 'folder', modified: '22-Aug-24' },
    { id: 4, name: 'Training', size: '457.76 Mb', type: 'folder', modified: '22-Aug-24' },
    { id: 5, name: 'Work', size: '572.2 Mb', type: 'folder', modified: '22-Aug-24' },
    { id: 6, name: 'cover-12.jpg', size: '762.94 Mb', type: 'jpg', modified: '22-Aug-24' },
    { id: 7, name: 'cover-18.jpg', size: '2.08 Mb', type: 'jpg', modified: '22-Aug-24' },
    { id: 8, name: 'cover-2.jpg', size: '1.99 Mb', type: 'jpg', modified: '22-Aug-24' },
    { id: 9, name: 'cover-4.jpg', size: '45.78 Mb', type: 'jpg', modified: '22-Aug-24' },
  ];
  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())||row.size.toLowerCase().includes(searchTerm.toLowerCase())||row.type.toLowerCase().includes(searchTerm.toLowerCase())||row.modified.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div style={{ height: 400, width: '100%' }}>
       <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Paper>
          <MenuItem onClick={handleClose}><Iconify icon="ant-design:link-outlined" sx={{mr:'12px'}}/>Copy</MenuItem>
          <MenuItem onClick={handleClose}><Iconify icon="ri:share-fill" sx={{mr:'12px'}}/>Share</MenuItem>
          <MenuItem onClick={handleClose} sx={{color:'#ff5630'}}><Iconify icon="weui:delete-on-filled" sx={{mr:'12px'}}/>Delete</MenuItem>
        </Paper>
      </Menu>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

DataTable.propTypes = {
    searchTerm: PropTypes.string.isRequired,
  };