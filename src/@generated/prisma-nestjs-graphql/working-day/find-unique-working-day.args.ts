import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkingDayWhereUniqueInput } from './working-day-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueWorkingDayArgs {

    @Field(() => WorkingDayWhereUniqueInput, {nullable:false})
    @Type(() => WorkingDayWhereUniqueInput)
    where!: WorkingDayWhereUniqueInput;
}
