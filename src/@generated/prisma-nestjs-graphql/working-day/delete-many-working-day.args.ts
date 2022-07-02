import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkingDayWhereInput } from './working-day-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWorkingDayArgs {

    @Field(() => WorkingDayWhereInput, {nullable:true})
    @Type(() => WorkingDayWhereInput)
    where?: WorkingDayWhereInput;
}
