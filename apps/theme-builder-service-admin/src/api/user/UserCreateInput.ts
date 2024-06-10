import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  emailAddress?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  uniqueEmailAddress?: string | null;
  uniqueFirstName?: string | null;
  uniqueLastName?: string | null;
  uniqueUsername?: string | null;
  uniqueUserPassword?: string | null;
  username: string;
  userName?: string | null;
  userPassword?: string | null;
};
