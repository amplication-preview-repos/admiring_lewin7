import { InputJsonValue } from "../../types";
import { UserAddressUpdateManyWithoutUsersInput } from "./UserAddressUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userAddresses?: UserAddressUpdateManyWithoutUsersInput;
  username?: string;
};
