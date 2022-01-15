/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  Box, Paper, Stack, Button,
} from '@mui/material';

import theme from '../theme';
import Context from '../context';
import AddProject from '../services/add_project';

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
          p: '0.5em',
          m: 1,
          width: '60vw',
          height: '40vh',
        },
      }}
    >
      <Paper elevation={4}>
        <Stack
          sx={{
            '& > :not(style)': {
              m: 1,
            },
          }}
        >
          {projects.map((project) => (
            <Button
              variant="outlined"
              onClick={setID}
              id={project._id}
              key={project._id}
            >
              <Link to="/home">{project.title}</Link>
            </Button>
          ))}
        </Stack>
      </Paper>
      <AddProject />
    </Box>
  );
}
