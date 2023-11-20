import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
//import Signup from './pages/Signup';
import Main from './pages/Main';
import Search from './pages/Search';
import Navbar from './pages/Navbar';
import Detail from './pages/Detail';
import Genre from './pages/Genre';
import Modal from 'react-modal';
import Mood from './pages/Mood'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/mypage' element={<><Navbar /><Mypage /></>} />
        <Route path='/main' element={<><Navbar /><Main /></>} />
        <Route path='/search' element={<><Navbar /><Search /></>} />
        <Route path='/detail/:content_id' element={<><Navbar /><Detail /></>} />
        <Route path='/mood/:mood' element={<><Navbar /><Mood /></>} />
        <Route path='/genre' element={<><Navbar /><Genre /></>} />
      </Routes>
    </BrowserRouter>
  );
}
Modal.setAppElement('#root')
export default App;
