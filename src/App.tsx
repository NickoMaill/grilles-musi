import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import styleResources from './resources/styleResources';
import Layout from './Components/Layout';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import '~/Sass/global.scss'
import Modal from './Components/Modal';
import MainView from './Components/MainView';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={styleResources.theme}>
        <Layout>
          <MainView/>
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
