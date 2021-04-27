import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Task } from 'src/task/task.schema';

export const UserSchema = new mongoose.Schema({
  lastname: String,
  firsttname: String,
  email: String,
  age: Number,
 
});

@ObjectType()
export class User extends Document {
  @Field()
  lastname: string;

  @Field()
  firstname: string;

  @Field()
  email: string;

  @Field()
  age: number;

}