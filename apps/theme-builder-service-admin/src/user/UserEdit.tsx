import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="email_address" source="emailAddress" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput
          label="unique_email_address"
          source="uniqueEmailAddress"
          type="email"
        />
        <TextInput label="unique_first_name" source="uniqueFirstName" />
        <TextInput label="unique_last_name" source="uniqueLastName" />
        <TextInput label="unique_username" source="uniqueUsername" />
        <TextInput label="unique_user_password" source="uniqueUserPassword" />
        <TextInput label="Username" source="username" />
        <TextInput label="user_name" source="userName" />
        <TextInput label="user_password" source="userPassword" />
      </SimpleForm>
    </Edit>
  );
};
