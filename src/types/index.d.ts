export interface IMenuItem {
  title: string;
  url: string;
  icon: React.ReactNode;
}

//User
export interface ICreateUserParams {
  clerkId: string;
  username: string;
  email_address: string;
  name?: string;
  avatar?: string;
}
