"use server";

import { IUser } from "@/database/user.model";

import { ConnectionToDatabase } from "../mongoose";
import { User } from "@/database";

export default async function createUser(params: IUser) {
  try {
    ConnectionToDatabase();
    const newUser = await User.create(params);

    return newUser;
  } catch (error) {
    console.log(error);
  }
}
