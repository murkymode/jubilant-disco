import React from 'react';
import {
  Box, List, ListItem,
  ListItemButton, ListItemText,
} from '@mui/material';

/* components */

export default function ActivityList({ handleDisplay }) {
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
        <ListItem onClick={handleDisplay} disablePadding>
          <ListItemButton>
            <ListItemText primary="Taskboard" />
          </ListItemButton>
        </ListItem>

        <ListItem onClick={handleDisplay} disablePadding>
          <ListItemButton>
            <ListItemText primary="Calendar" />
          </ListItemButton>
        </ListItem>

        <ListItem onClick={handleDisplay} disablePadding>
          <ListItemButton>
            <ListItemText primary="Resources" />
          </ListItemButton>
        </ListItem>

        <ListItem onClick={handleDisplay} disablePadding>
          <ListItemButton>
            <ListItemText primary="Whiteboard" />
          </ListItemButton>
        </ListItem>

        <ListItem onClick={handleDisplay} disablePadding>
          <ListItemButton>
            <ListItemText primary="Notes" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
