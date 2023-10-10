import {FunctionComponent} from 'react';
import './assets/styles/reset.css'
import './assets/styles/app.css'

import Main from "./pages/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BookPage from "./pages/BookPage";
const App:FunctionComponent = ()=>{

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
