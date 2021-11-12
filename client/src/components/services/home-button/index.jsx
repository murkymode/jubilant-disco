import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
} from '@mui/material';

export default function Home() {
  return (
    <Button style={{ height: '2rem', width: '4em' }}>
      <Link to="/">Home </Link>
    </Button>
  );
}
