import React, {useEffect} from 'react';
import './reset.css'
import './app.css'

import Main from "./pages/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BookPage from "./pages/BookPage";
function App() {

  return (
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Main/>}/>
              <Route path={'/book/:id'} element={<BookPage/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
