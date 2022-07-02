import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WorkingDayCountOrderByAggregateInput } from './working-day-count-order-by-aggregate.input';
import { WorkingDayAvgOrderByAggregateInput } from './working-day-avg-order-by-aggregate.input';
import { WorkingDayMaxOrderByAggregateInput } from './working-day-max-order-by-aggregate.input';
import { WorkingDayMinOrderByAggregateInput } from './working-day-min-order-by-aggregate.input';
import { WorkingDaySumOrderByAggregateInput } from './working-day-sum-order-by-aggregate.input';

@InputType()
export class WorkingDayOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    exitedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mobile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    company?: keyof typeof SortOrder;

    @Field(() => WorkingDayCountOrderByAggregateInput, {nullable:true})
    _count?: WorkingDayCountOrderByAggregateInput;

    @Field(() => WorkingDayAvgOrderByAggregateInput, {nullable:true})
    _avg?: WorkingDayAvgOrderByAggregateInput;

    @Field(() => WorkingDayMaxOrderByAggregateInput, {nullable:true})
    _max?: WorkingDayMaxOrderByAggregateInput;

    @Field(() => WorkingDayMinOrderByAggregateInput, {nullable:true})
    _min?: WorkingDayMinOrderByAggregateInput;

    @Field(() => WorkingDaySumOrderByAggregateInput, {nullable:true})
    _sum?: WorkingDaySumOrderByAggregateInput;
}
