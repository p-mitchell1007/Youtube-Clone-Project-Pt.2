import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './component/Home';
import About from './component/About';
import VideoPlayer from './component/Videoplayer';
import Feed from './component/Feed';
import Searchbar from './component/Searchbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Searchbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/video/0MYacOcScG0' element={<VideoPlayer />}></Route>
          <Route path='/search/:searchTerm' element={<Feed />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
