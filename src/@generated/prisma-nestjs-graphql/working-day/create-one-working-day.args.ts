import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkingDayCreateInput } from './working-day-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWorkingDayArgs {

    @Field(() => WorkingDayCreateInput, {nullable:false})
    @Type(() => WorkingDayCreateInput)
    data!: WorkingDayCreateInput;
}
