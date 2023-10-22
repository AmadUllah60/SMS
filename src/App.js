import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import SignUp from './components/SignUp/SignUp';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

