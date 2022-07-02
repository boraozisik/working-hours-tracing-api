import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkingDayWhereInput } from './working-day-where.input';
import { Type } from 'class-transformer';
import { WorkingDayOrderByWithRelationInput } from './working-day-order-by-with-relation.input';
import { WorkingDayWhereUniqueInput } from './working-day-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkingDayScalarFieldEnum } from './working-day-scalar-field.enum';

@ArgsType()
export class FindFirstWorkingDayArgs {

    @Field(() => WorkingDayWhereInput, {nullable:true})
    @Type(() => WorkingDayWhereInput)
    where?: WorkingDayWhereInput;

    @Field(() => [WorkingDayOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkingDayOrderByWithRelationInput>;

    @Field(() => WorkingDayWhereUniqueInput, {nullable:true})
    cursor?: WorkingDayWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WorkingDayScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WorkingDayScalarFieldEnum>;
}
