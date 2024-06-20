import { User } from "../user/User";

export type UserAddress = {
  address: string | null;
  city: string | null;
  createdAt: Date;
  id: string;
  order: number | null;
  phone: string | null;
  selected: boolean | null;
  updatedAt: Date;
  user?: User | null;
};
