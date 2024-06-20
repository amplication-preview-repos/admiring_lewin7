import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserAddressUpdateInput = {
  address?: string | null;
  city?: string | null;
  order?: number | null;
  phone?: string | null;
  selected?: boolean | null;
  user?: UserWhereUniqueInput | null;
};