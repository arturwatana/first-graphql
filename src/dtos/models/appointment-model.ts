import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Appointment {
  @Field()
  startAt: Date;
  @Field()
  endAt: Date;
}
