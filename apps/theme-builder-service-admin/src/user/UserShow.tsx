import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="email_address" source="emailAddress" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <TextField label="unique_email_address" source="uniqueEmailAddress" />
        <TextField label="unique_first_name" source="uniqueFirstName" />
        <TextField label="unique_last_name" source="uniqueLastName" />
        <TextField label="unique_username" source="uniqueUsername" />
        <TextField label="unique_user_password" source="uniqueUserPassword" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="user_name" source="userName" />
        <TextField label="user_password" source="userPassword" />
      </SimpleShowLayout>
    </Show>
  );
};
