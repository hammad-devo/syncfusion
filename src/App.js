import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Navbar from './components/Navbar';
import Signup from './Pages/Signup';
import Resetpassword from './Pages/Resetpassword';
import Updatepassword from './Pages/Updatepassword';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import Questions from './Pages/Questions';
import MainContext from './context/ContextComp';
import SkillDatabse from './Pages/SkillDatabse';
import Jobs from './Pages/Jobs';
import Skillsdetails from './Pages/Skilldetail';
function App() {
  return (
    <MainContext>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/resetpassword' element={<Resetpassword />} />
          <Route path='/updatepassword/:token' element={<Updatepassword />} />
          <Route path="/linkedin" element={<LinkedInCallback />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/skillsdatabase" element={<SkillDatabse />} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path="/details" element={<Skillsdetails/>} />
        </Routes>
      </Router>
    </MainContext>
  );
}

export default App;
