import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class WorkingDayWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;
}
