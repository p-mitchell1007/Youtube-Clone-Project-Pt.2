import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './component/Home';
import About from './component/About';
import VideoDetail from './component/VideoDetail';
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
          <Route path='/video/:id' element={<VideoDetail />}></Route>
          <Route path='/search/:searchTerm' element={<Feed />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
