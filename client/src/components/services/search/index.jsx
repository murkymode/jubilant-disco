import * as React from 'react';
import {
  TextField,
} from '@mui/material';

/* components */

export default function Search() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#131313',
        width: '30vw',
        height: '9vh',
        borderLeft: '1px solid grey',
        borderTop: '1px solid grey',
        borderRight: '1px solid grey',
      }}
    >
      <TextField
        variant="filled"
        label="Search"
        color="success"
        style={{
          width: '100%',
          margin: '.5em',
          justifyContent: 'center',
        }}
        inputProps={{
          style: {
            color: 'white',
          },
        }}
      />
    </div>
  );
}
