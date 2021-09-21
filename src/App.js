import SideNav from './components/Nav/SideNav';
import Profile from './components/Profile/Profile';
import Modal from './components/Common/Modal';
import { BrowserRouter as Router } from 'react-router-dom';
import AddAccount from './pages/Accounts/AddAccount';

function App() {
  return (
    <Router>
      {/* <SideNav /> */}
      {/* <Profile /> */}
      <AddAccount />
      {/* <Modal /> */}
    </Router>
  );
}

export default App;
