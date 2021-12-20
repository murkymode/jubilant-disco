import React from 'react';
import {
  Box, Typography, List, ListItem,
  Divider, ListItemButton, ListItemText,
} from '@mui/material';

/* components */

export default function ActivityList({ handleClick }) {
  return (
    <Box
      style={{
        display: 'flex',
        backgroundColor: '#131313',
        flexDirection: 'column',
        paddingTop: '1em',
      }}
    >
      <List>
        <ListItem onClick={handleClick} disablePadding>
          <ListItemButton>
            <ListItemText primary="Taskboard" />
          </ListItemButton>
        </ListItem>

        <ListItem onClick={handleClick} disablePadding>
          <ListItemButton>
            <ListItemText primary="Calendar" />
          </ListItemButton>
        </ListItem>

        <ListItem onClick={handleClick} disablePadding>
          <ListItemButton>
            <ListItemText primary="Resources" />
          </ListItemButton>
        </ListItem>

        <ListItem onClick={handleClick} disablePadding>
          <ListItemButton>
            <ListItemText primary="Whiteboard" />
          </ListItemButton>
        </ListItem>

        <ListItem onClick={handleClick} disablePadding>
          <ListItemButton>
            <ListItemText primary="Notes" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
