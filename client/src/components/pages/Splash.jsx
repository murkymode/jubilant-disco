/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  QueryClient, QueryClientProvider, useQuery,
} from 'react-query';

import {
  Box, Paper, Stack, Button,
} from '@mui/material';

import theme from '../theme';

const { main } = theme.palette.secondary;

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Splash />
    </QueryClientProvider>
  );

  function Splash() {
    const {
      isLoading, error, data,
    } = useQuery('fetchProjects', () => fetch('/api/projects')
      .then((res) => res.json()));

    if (isLoading) return 'Loading Projects...';
    if (error) return `Aww, an error: ${error.message}`;

    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& > :not(style)': {
            backgroundColor: main,
            m: 1,
            width: '60vw',
            height: '40vh',
          },
        }}
      >
        <Paper elevation={4}>
          <Stack>
            {data.map((project) => (
              <Button key={project._id}>
                <Link to="/home">{project.title}</Link>
              </Button>
            ))}
          </Stack>
        </Paper>
      </Box>
    );
  }
}
