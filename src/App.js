import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './Pages/FormPage';
import ResultPage from './Pages/ResultPage';
import ErrorPage from './Pages/ErrorPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FormPage />} exact />
        <Route path='/result' element={<ResultPage />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
