import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkingDay {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    day!: number;

    @Field(() => Date, {nullable:false})
    exitedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    mobile!: string | null;

    @Field(() => String, {nullable:true})
    message!: string | null;

    @Field(() => String, {nullable:true})
    company!: string | null;
}
