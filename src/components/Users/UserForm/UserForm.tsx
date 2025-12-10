import Button from '../../../UI/Button/Button';
import './UserForm.css';

const UserForm = () => {
  const roles = ['user', 'editor', 'admin'];

  return (
    <div className="w-50">
      <form>
        <div className="d-flex flex-column align-items-start gap-4 w-50">
          <label className="w-100">
            <input
              type="text"
              name="name"
              placeholder="User name"
              className="px-4 py-3 border border-dark rounded-5 w-100"
            />
          </label>

          <label className="w-100">
            <input
              type="email"
              name="email"
              placeholder="User email"
              className="px-4 py-3 border border-dark rounded-5 w-100"
            />
          </label>

          <label className="checkbox-label bg-white px-4 py-3 rounded-5 w-100 d-flex flex-lg-row justify-content-between ">
            Is Active User?
            <input
              type="checkbox"
              name="isActive"
              title="is active?"
              className="ms-3 cursor-pointer"
            />
          </label>

          <select
            name="role"
            id="role"
            title="choose role"
            className="form-select rounded-5 w-100 px-4 py-3 pe-auto cursor-pointer"
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
