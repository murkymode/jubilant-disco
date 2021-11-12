import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
} from '@mui/material';

export default function Home() {
  return (
    <Button>
      <Link to="/">Projects </Link>
    </Button>
  );
}
