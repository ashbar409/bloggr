import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './screens/About';
import Home from './screens/Home';
import Posts from './screens/Posts';
import Post from './screens/Post'
import NotFound from './screens/NotFound';

function App() {
  return (
    <div className="App">
      <div className='links'>
        <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/posts'}>Posts</NavLink>
        </nav>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:post_id' element={<Post />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <div id="particle-container">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>
    </div>
  );
}

export default App;
