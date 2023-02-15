import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import styleResources from './resources/styleResources';
import Layout from './Components/Layout';
import '~/Sass/global.scss'
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
