export type UserData = {
  id: number
  email: string
  avatar: string
  first_name: string
  last_name: string
};

// export type EditUserData = Omit<UserData, 'id' | 'avatar'>;
