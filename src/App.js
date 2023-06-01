import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './component/Home';
import About from './component/About';
import VideoPlayer from './component/Videoplayer';
import Feed from './component/Feed';
import Searchbar from './component/Searchbar';
import NavBar from './component/NavBar.js'
import SearchError from './component/SearchError'
import NoPage from './component/NoPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Searchbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/video/:id' element={<VideoPlayer />}></Route>
          <Route path='/search/:searchTerm' element={
          <div className='page'>
            <Feed />
          </div>}></Route>

          <Route path='/search/' element={<SearchError />}></Route>
          <Route path='*' element={<NoPage />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
