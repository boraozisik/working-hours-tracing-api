import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkingDayWhereUniqueInput } from './working-day-where-unique.input';
import { Type } from 'class-transformer';
import { WorkingDayCreateInput } from './working-day-create.input';
import { WorkingDayUpdateInput } from './working-day-update.input';

@ArgsType()
export class UpsertOneWorkingDayArgs {

    @Field(() => WorkingDayWhereUniqueInput, {nullable:false})
    @Type(() => WorkingDayWhereUniqueInput)
    where!: WorkingDayWhereUniqueInput;

    @Field(() => WorkingDayCreateInput, {nullable:false})
    @Type(() => WorkingDayCreateInput)
    create!: WorkingDayCreateInput;

    @Field(() => WorkingDayUpdateInput, {nullable:false})
    @Type(() => WorkingDayUpdateInput)
    update!: WorkingDayUpdateInput;
}
