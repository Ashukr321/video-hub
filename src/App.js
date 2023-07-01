import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home.jsx'
import Videos from './components/Videos';
import Upload from './components/Upload';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <Router>
     <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>

      
      <Footer />
    </Router>
  );
}

export default App;
