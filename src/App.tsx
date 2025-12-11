import UserManagement from './containers/UserManagement/UserManagement';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <ToastContainer />
      <div className="container-xl position-fixed top-50 start-50 translate-middle">
        <UserManagement />
      </div>
    </>
  );
};

export default App;
