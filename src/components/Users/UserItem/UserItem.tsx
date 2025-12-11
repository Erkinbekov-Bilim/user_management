import React from 'react';
import type { IUser } from '../../../types';
import './UserItem.css';

interface IUserItemProps {
  user: IUser;
}

const UserItem: React.FC<IUserItemProps> = ({ user }) => {
  let isActiveDecor = user.isActive ? 'active' : 'inactive';

  return (
    <div
      className={`user-item p-4 rounded-5 text-white mx-auto border-3 ${
        user.isActive ? 'border border-success active-user' : 'border border-warning inactive-user'
      }`}
    >
      <div className="field d-flex flex-row">
        <p className="attribute text-uppercase">id:</p>
        <p className="ms-3">{user.id}</p>
      </div>
      <div className="field d-flex flex-row">
        <p className="attribute text-uppercase">name:</p>
        <p className="ms-3">{user.name}</p>
      </div>
      <div className="field d-flex flex-row">
        <p className="attribute text-uppercase">email:</p>
        <p className="ms-3">{user.email}</p>
      </div>
      <div className="field d-flex flex-row">
        <p className="attribute text-uppercase">status:</p>
        <p
          className={`d-flex flex-row align-items-center is-active ${isActiveDecor}`}
        >
          {isActiveDecor}
        </p>
      </div>
      <div className="field d-flex flex-row">
        <p className="attribute text-uppercase">role:</p>
        <p className="ms-3">{user.role}</p>
      </div>
    </div>
  );
};

export default UserItem;
