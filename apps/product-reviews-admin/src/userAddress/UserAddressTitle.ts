import { UserAddress as TUserAddress } from "../api/userAddress/UserAddress";

export const USERADDRESS_TITLE_FIELD = "address";

export const UserAddressTitle = (record: TUserAddress): string => {
  return record.address?.toString() || String(record.id);
};
