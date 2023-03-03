export interface IUser {
    email: string;
    password: string;
    comparePassword: (password: string) => Promise<Boolean>
};

export interface IUserSignIn {
    _id : string,
    email : string
}   