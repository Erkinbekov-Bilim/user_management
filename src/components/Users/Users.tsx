import React from 'react';
import type { IUser } from '../../types';
import UserItem from './UserItem/UserItem';
import './Users.css';

interface IUsersProps {
  users: IUser[];
}

const Users: React.FC<IUsersProps> = ({ users }) => {
  let items: React.ReactNode = null;

  if (users.length === 0) {
    items = (
      <>
        <p className="empty-text mx-auto">No users</p>
      </>
    );
  } else {
    items = (
      <>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </>
    );
  }

  return (
    <div className="users-block ms-5 bg-white rounded-5 p-5 w-100">
      <div className="users-content d-flex flex-row flex-wrap align-items-start gap-3">
        {items}
      </div>
    </div>
  );
};

export default Users;
