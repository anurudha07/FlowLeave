import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import UsersList from './pages/UsersList';
import ApplyLeave from './pages/ApplyLeave';
import LeaveList from './pages/LeaveList';


const App = () => (
  <Router>
    <Navbar />
    <main>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="/apply-leave" element={<ApplyLeave />} />
      <Route path="/leave-list" element={<LeaveList />} />
    </Routes>
    </main>
  </Router>
);

export default App;