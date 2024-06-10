import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  emailAddress?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  uniqueEmailAddress?: StringNullableFilter;
  uniqueFirstName?: StringNullableFilter;
  uniqueLastName?: StringNullableFilter;
  uniqueUsername?: StringNullableFilter;
  uniqueUserPassword?: StringNullableFilter;
  username?: StringFilter;
  userName?: StringNullableFilter;
  userPassword?: StringNullableFilter;
};
