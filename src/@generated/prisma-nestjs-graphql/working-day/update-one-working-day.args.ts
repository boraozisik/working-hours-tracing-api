import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkingDayUpdateInput } from './working-day-update.input';
import { Type } from 'class-transformer';
import { WorkingDayWhereUniqueInput } from './working-day-where-unique.input';

@ArgsType()
export class UpdateOneWorkingDayArgs {

    @Field(() => WorkingDayUpdateInput, {nullable:false})
    @Type(() => WorkingDayUpdateInput)
    data!: WorkingDayUpdateInput;

    @Field(() => WorkingDayWhereUniqueInput, {nullable:false})
    @Type(() => WorkingDayWhereUniqueInput)
    where!: WorkingDayWhereUniqueInput;
}
