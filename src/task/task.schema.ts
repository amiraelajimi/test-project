import { Field, Int, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/user.schema';

export const TaskSchema = new mongoose.Schema({
  title: String,
  status: String,
  description: String,
  commentaire: String,
  user_id: Number
});

@ObjectType()
export class Task extends Document {
  @Field()
  title: string;

  @Field()
  status: string;

  @Field()
  description: string;

  @Field()
  commentaire: string;

  @Field()
  user_id: number;


}