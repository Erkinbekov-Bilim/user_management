import { useState } from 'react';
import UserForm from '../../components/Users/UserForm/UserForm';
import './UserManagement.css';
import type { IUser } from '../../types';
import Users from '../../components/Users/Users';

const UserManagement = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const addUser = (user: IUser) => {
    setUsers((prevState) => [...prevState, user]);
  };

  return (
    <div className="user-management p-5 rounded-5 d-flex flex-row align-items-start">
      <UserForm addUser={addUser} />
      <Users users={users} />
    </div>
  );
};

export default UserManagement;
