"use server";

import { ConnectionToDatabase } from "../mongoose";
import { User } from "@/database";
import { IUser } from "@/database/user.model";
import { ICreateUserParams } from "@/types";

export default async function createUser(params: ICreateUserParams) {
  try {
    ConnectionToDatabase();
    const newUser: IUser = await User.create(params);
    return newUser;
  } catch (error) {
    console.log(error);
  }
}
