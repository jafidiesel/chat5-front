import React from 'react';
import { Container, Grid } from '@material-ui/core';
import './App.css';
import Body from './components/Body/Body';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Body />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
