import React from 'react';
import Form from './Form';
import { Container, Grid } from '@material-ui/core';

const App = function () {
  return (
    <Container fixed>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Form defaultValue="defaultValue" />
      </Grid>
    </Container >


  )
}

export default App;
