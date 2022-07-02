import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class WorkingDayWhereInput {

    @Field(() => [WorkingDayWhereInput], {nullable:true})
    AND?: Array<WorkingDayWhereInput>;

    @Field(() => [WorkingDayWhereInput], {nullable:true})
    OR?: Array<WorkingDayWhereInput>;

    @Field(() => [WorkingDayWhereInput], {nullable:true})
    NOT?: Array<WorkingDayWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    day?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    exitedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mobile?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    message?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    company?: StringNullableFilter;
}
