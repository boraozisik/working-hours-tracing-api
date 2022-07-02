import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class WorkingDayCreateInput {
  @Field(() => Int, { nullable: false })
  day!: number;

  @Field(() => Date, { nullable: true })
  exitedAt?: Date | string;

  @Field(() => String, { nullable: false })
  @Validator.MinLength(3)
  name!: string;

  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;

  @Field(() => String, { nullable: true })
  mobile?: string;

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => String, { nullable: true })
  company?: string;
}
