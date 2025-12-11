import type React from 'react';
import Button from '../../../UI/Button/Button';
import './UserForm.css';
import { useState } from 'react';
import type { IUser, IUserFormMutation } from '../../../types';
import generateId from '../../../utils/generateId';
import { toast } from 'react-toastify';

interface IUserFormProps {
  addUser: (user: IUser) => void;
}

const UserForm: React.FC<IUserFormProps> = ({ addUser }) => {
  const roles = ['user', 'editor', 'admin'];

  const [checked, setChecked] = useState<boolean>(false);

  const [form, setForm] = useState<IUserFormMutation>({
    name: '',
    email: '',
    isActive: false,
    role: '',
  });

  const onChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
      isActive: checked,
    }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      form.name.trim().length === 0 ||
      form.email.trim().length === 0 ||
      form.role === ''
    ) {
      toast.error("User name, email and role can't be empty");
    } else if (!form.email.includes('@gmail.com')) {
      toast.error('User email must be @gmail.com');
    } else if (
      form.email.trim().slice(0, form.email.indexOf('@')).length > 15 ||
      form.name.trim().length > 15
    ) {
      toast.error('User name and email must be less than 15 characters');
    } else {
      toast.success('User added successfully');
      addUser({ ...form, id: generateId() });
      setForm({ name: '', email: '', isActive: false, role: '' });
      setChecked(false);
    }
  };

  return (
    <div className="form-block">
      <form onSubmit={onSubmit}>
        <div className="d-flex flex-column align-items-start gap-4 w-100">
          <label className="w-100">
            <input
              type="text"
              name="name"
              placeholder="User name"
              className="px-4 py-3 border border-dark rounded-5 w-100"
              onChange={onChange}
              value={form.name}
              required
            />
          </label>

          <label className="w-100">
            <input
              type="email"
              name="email"
              placeholder="User email"
              className="px-4 py-3 border border-dark rounded-5 w-100"
              onChange={onChange}
              value={form.email}
              required
            />
          </label>

          <label className="checkbox-label bg-white px-4 py-3 rounded-5 w-100 d-flex flex-lg-row justify-content-between">
            Is Active User?
            <input
              type="checkbox"
              title="is active?"
              className="ms-3 cursor-pointer"
              checked={checked}
              onChange={onChangeCheck}
            />
          </label>

          <select
            name="role"
            id="role"
            title="choose role"
            className="select-role form-select rounded-5 w-100 px-4 py-3 "
            onChange={onChange}
            value={form.role}
            required
          >
            <option value="" selected disabled>
              Choose role
            </option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>

          <Button
            type="submit"
            text="Save"
            title="Save User"
            className="btn-save-user w-100 rounded-5 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
