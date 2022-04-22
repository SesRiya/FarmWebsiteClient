import { AuthArgs } from "./types";

export const loginUser = ({ password, login }: AuthArgs): Promise<boolean> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (login === "MarleyBob" && password === "test1234") {
        resolve(true);
      } else {
        reject("Wrong login and Password details");
      }
    }, 1500)
  );

export const registerUser = ({ password, login }: AuthArgs): Promise<boolean> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (login === "MarleyBob") {
        reject("Login already taken");
      } else if (password.length < 5) {
        reject("Password too short");
      } else {
        resolve(true);
      }
    }, 1500)
  );

export const forgotPassword = (login: string): Promise<boolean> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (login === "MarleyBob") {
        resolve(true);
      } else {
        reject("No such user exists");
      }
    }, 1500)
  );
