/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  Box, Paper, Stack, Button,
} from '@mui/material';

import theme from '../theme';
import Context from '../context';
import ManageProjects from '../services/manage_projects';

const { main } = theme.palette.secondary;

export default function Splash({ projects }) {
  /* sets current project id in context */
  const { handleID } = useContext(Context);
  const setID = (e) => {
    const { id } = e.target.parentNode;
    handleID(id);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style)': {
          backgroundColor: main,
          p: 0.5,
          m: 1,
          width: '60vw',
          height: '40vh',
        },
      }}
    >
      <Paper
        elevation={4}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Stack
          style={{
            margin: '1em',
          }}
        >
          {projects.map((project) => (
            <Button
              variant="outlined"
              onClick={setID}
              id={project._id}
              key={project._id}
              style={{
                margin: '1em',
                minWidth: '20em',
                maxWidth: '40em',
                maxHeight: '3em',
                overflow: 'hidden',
              }}
            >
              <Link to="/home">{project.title}</Link>
            </Button>
          ))}
        </Stack>
      </Paper>
      <ManageProjects />
    </Box>
  );
}
