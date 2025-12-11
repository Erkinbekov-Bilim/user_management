interface IUserFormMutation {
  name: string;
  email: string;
  isActive: boolean;
  role: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  role: string;
}

export { IUserFormMutation, IUser };
