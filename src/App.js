import React, { lazy, Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LazyLoader from './components/LazyLoader/LazyLoader';

function App() {

  const Home = lazy(() => import('./components/Home/Home'));
  const NotFound = lazy(() => import('./components/NotFound/NotFound'));

  return (
    <Suspense fallback={LazyLoader()}>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route element={<NotFound />} />
    </Routes>
  </Suspense>
  );
}

export default App;