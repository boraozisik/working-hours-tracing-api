import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkingDayCountAggregate } from './working-day-count-aggregate.output';
import { WorkingDayAvgAggregate } from './working-day-avg-aggregate.output';
import { WorkingDaySumAggregate } from './working-day-sum-aggregate.output';
import { WorkingDayMinAggregate } from './working-day-min-aggregate.output';
import { WorkingDayMaxAggregate } from './working-day-max-aggregate.output';

@ObjectType()
export class AggregateWorkingDay {

    @Field(() => WorkingDayCountAggregate, {nullable:true})
    _count?: WorkingDayCountAggregate;

    @Field(() => WorkingDayAvgAggregate, {nullable:true})
    _avg?: WorkingDayAvgAggregate;

    @Field(() => WorkingDaySumAggregate, {nullable:true})
    _sum?: WorkingDaySumAggregate;

    @Field(() => WorkingDayMinAggregate, {nullable:true})
    _min?: WorkingDayMinAggregate;

    @Field(() => WorkingDayMaxAggregate, {nullable:true})
    _max?: WorkingDayMaxAggregate;
}
