import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import styleResources from './resources/styleResources';
import Layout from './Components/Layout';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import '~/Sass/global.scss'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={styleResources.theme}>
        <Layout>
          <Box>
            <Typography>texte</Typography>
          </Box>
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
