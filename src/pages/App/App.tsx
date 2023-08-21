import React from 'react';
import router from 'constants/router';
import './App.css';

// Layout Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path={router.home.url} element={router.home.element} />
            <Route path={router.profile.url} element={router.profile.element} />
            <Route path={router.portfolio.url} element={router.portfolio.element} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
