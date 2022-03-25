import {
  AppBar,
  Box,
  createTheme,
  Tab,
  Tabs,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles';
import ImageIcon from '@mui/icons-material/Image';
import { useLocation } from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#e5e5e5',
        },
      },
    },
  },
});

export default (): React.ReactElement => {
  const location = useLocation();
  const currentPath = getCurrentPath(location.pathname);
  return (
    <nav className="nav-root">
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Box flex={1} display="flex" justifyContent="space-between">
            <Box
              className="nav-logo-link"
              display="flex"
              alignItems="center"
              component={Link}
              to="/"
            >
              <ImageIcon />
              <Typography component="span" variant="h5">
                Photolog
              </Typography>
            </Box>
            <Box className="nav-box">
              <ThemeProvider theme={theme}>
                <Tabs value={currentPath} aria-label="Navigation Tabs">
                  <Tab label="Home" component={Link} to="/" />
                  <Tab label="Albums" component={Link} to="/albums" />
                  <Tab label="Collections" component={Link} to="/collections" />
                </Tabs>
              </ThemeProvider>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

function getCurrentPath(pathName: string): number {
  if (pathName.includes('collection/')) return 2;
  if (pathName.includes('photo/')) return 0;
  const links = ['/', '/albums', '/collections'].indexOf(location.pathname);
  return links > -1 ? links : 0;
}
