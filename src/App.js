import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './component/Home';
import About from './component/About';
import VideoPlayer from './component/Videoplayer';
import Feed from './component/Feed';
import Searchbar from './component/Searchbar';
import NavBar from './component/NavBar.js'
import ModalWindow from './component/ModalWindow.js'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Searchbar />
      <ModalWindow/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/video/:id' element={<VideoPlayer />}></Route>
          <Route path='/search/:searchTerm' element={
          <div className='page'>
            <Feed />
          </div>}></Route>

          <Route path='/search/:searchTerm' element={<Feed />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
