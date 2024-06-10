import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  emailAddress: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  uniqueEmailAddress: string | null;
  uniqueFirstName: string | null;
  uniqueLastName: string | null;
  uniqueUsername: string | null;
  uniqueUserPassword: string | null;
  updatedAt: Date;
  username: string;
  userName: string | null;
  userPassword: string | null;
};
