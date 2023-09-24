import { InputType, Field } from "type-graphql";
import { IsString, IsDate } from "class-validator";

@InputType()
export class CreateAppointmentInput {
  @IsString()
  @Field()
  customerId: string;

  @IsDate()
  @Field()
  startAt: Date;

  @IsDate()
  @Field()
  endAt: Date;
}
