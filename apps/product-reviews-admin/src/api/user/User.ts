import { JsonValue } from "type-fest";
import { UserAddress } from "../userAddress/UserAddress";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userAddresses?: Array<UserAddress>;
  username: string;
};
