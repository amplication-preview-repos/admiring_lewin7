/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserAddressWhereUniqueInput } from "../../userAddress/base/UserAddressWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserAddressUpdateManyWithoutUsersInput {
  @Field(() => [UserAddressWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAddressWhereUniqueInput],
  })
  connect?: Array<UserAddressWhereUniqueInput>;

  @Field(() => [UserAddressWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAddressWhereUniqueInput],
  })
  disconnect?: Array<UserAddressWhereUniqueInput>;

  @Field(() => [UserAddressWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAddressWhereUniqueInput],
  })
  set?: Array<UserAddressWhereUniqueInput>;
}

export { UserAddressUpdateManyWithoutUsersInput as UserAddressUpdateManyWithoutUsersInput };