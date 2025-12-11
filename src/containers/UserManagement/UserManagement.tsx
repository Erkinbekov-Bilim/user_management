import { useState } from 'react';
import UserForm from '../../components/Users/UserForm/UserForm';
import './UserManagement.css';
import type { IUser } from '../../types';

const UserManagement = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const addUser = (user: IUser) => {
    setUsers([...users, user]);
  };

  console.log(users);

  return (
    <div className="user-management p-5 rounded-5">
      <UserForm addUser={addUser} />
    </div>
  );
};

export default UserManagement;
