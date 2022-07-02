import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkingDayWhereInput } from './working-day-where.input';
import { Type } from 'class-transformer';
import { WorkingDayOrderByWithRelationInput } from './working-day-order-by-with-relation.input';
import { WorkingDayWhereUniqueInput } from './working-day-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkingDayCountAggregateInput } from './working-day-count-aggregate.input';
import { WorkingDayAvgAggregateInput } from './working-day-avg-aggregate.input';
import { WorkingDaySumAggregateInput } from './working-day-sum-aggregate.input';
import { WorkingDayMinAggregateInput } from './working-day-min-aggregate.input';
import { WorkingDayMaxAggregateInput } from './working-day-max-aggregate.input';

@ArgsType()
export class WorkingDayAggregateArgs {

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

    @Field(() => WorkingDayCountAggregateInput, {nullable:true})
    _count?: WorkingDayCountAggregateInput;

    @Field(() => WorkingDayAvgAggregateInput, {nullable:true})
    _avg?: WorkingDayAvgAggregateInput;

    @Field(() => WorkingDaySumAggregateInput, {nullable:true})
    _sum?: WorkingDaySumAggregateInput;

    @Field(() => WorkingDayMinAggregateInput, {nullable:true})
    _min?: WorkingDayMinAggregateInput;

    @Field(() => WorkingDayMaxAggregateInput, {nullable:true})
    _max?: WorkingDayMaxAggregateInput;
}
