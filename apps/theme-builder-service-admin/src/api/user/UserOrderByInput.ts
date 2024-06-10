import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  emailAddress?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  uniqueEmailAddress?: SortOrder;
  uniqueFirstName?: SortOrder;
  uniqueLastName?: SortOrder;
  uniqueUsername?: SortOrder;
  uniqueUserPassword?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  userName?: SortOrder;
  userPassword?: SortOrder;
};
