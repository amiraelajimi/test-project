import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  lastname: string;

  @Field()
  firstname: string;

  @Field()
  email: string;

  @Field()
  age: number;
}