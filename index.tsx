import React, { useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';
import './react-router-dom-style.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Box, Container } from '@mui/material';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { HomePage, NotFound, PhotoPage, CollectionsPage } from './pages';
import Header from './components/Header';
import Loading from './components/Loading';
import { useDispatch } from 'react-redux';
import { getAppDataAsync } from './redux/actions';

const App = () => {
  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppDataAsync());
  }, []);

  return (
    <div>
      <Loading />
      <Header />
      <DefaultLayout>
        {/* <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={600}
          > */}
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/photo/:id" element={<PhotoPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collection/:id" element={<CollectionsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </CSSTransition>
        </TransitionGroup> */}
      </DefaultLayout>
    </div>
  );
};

interface DefaultLayoutInterface {
  children?: React.ReactNode;
}
const DefaultLayout = ({ children }: DefaultLayoutInterface) => {
  return (
    <Container>
      <Box
        sx={{
          margin: 'auto',
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
