import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserAddressWhereInput = {
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  id?: StringFilter;
  order?: IntNullableFilter;
  phone?: StringNullableFilter;
  selected?: BooleanNullableFilter;
  user?: UserWhereUniqueInput;
};
