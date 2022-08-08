import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/global';
import { theme } from 'styles/theme';

import { Home, Movie, NotFound } from '../pages';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="app">
      <GlobalStyle />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  </ThemeProvider>
);

export { App };
