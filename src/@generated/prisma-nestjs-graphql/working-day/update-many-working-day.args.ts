import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkingDayUpdateManyMutationInput } from './working-day-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WorkingDayWhereInput } from './working-day-where.input';

@ArgsType()
export class UpdateManyWorkingDayArgs {

    @Field(() => WorkingDayUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkingDayUpdateManyMutationInput)
    data!: WorkingDayUpdateManyMutationInput;

    @Field(() => WorkingDayWhereInput, {nullable:true})
    @Type(() => WorkingDayWhereInput)
    where?: WorkingDayWhereInput;
}
