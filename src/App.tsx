import UserManagement from './containers/UserManagement/UserManagement';

const App = () => {
  return (
    <>
      <div className="container-xl position-fixed top-50 start-50 translate-middle">
        <UserManagement />
      </div>
    </>
  );
};

export default App;
