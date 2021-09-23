import SideNav from './components/Nav/SideNav';
import Profile from './components/Profile/Profile';
import Modal from './components/Common/Modal';
import { BrowserRouter as Router } from 'react-router-dom';
import AddAccount from './pages/Accounts/AddAccount';
import AddDc from './pages/Accounts/AddDc';

function App() {
  return (
    <Router>
      {/* <SideNav /> */}
      {/* <Profile /> */}
      <AddAccount />
      {/* <Modal /> */}
      {/* <AddDc /> */}
    </Router>
  );
}

export default App;
