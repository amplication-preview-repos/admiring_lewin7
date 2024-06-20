import { InputJsonValue } from "../../types";
import { UserAddressCreateNestedManyWithoutUsersInput } from "./UserAddressCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userAddresses?: UserAddressCreateNestedManyWithoutUsersInput;
  username: string;
};
