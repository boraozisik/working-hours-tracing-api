import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WorkingDaysService } from './working-days.service';
import { OrderByParams } from 'src/graphql';
import { Prisma } from '@prisma/client';
import { WorkingDayCreateInput } from 'src/@generated/prisma-nestjs-graphql/working-day/working-day-create.input';

@Resolver('WorkingDay')
export class WorkingDaysResolver {
  constructor(private readonly workingDaysService: WorkingDaysService) {}

  @Mutation('createWorkingDay')
  create(
    @Args('createWorkingDayInput')
    createWorkingDayInput: WorkingDayCreateInput,
  ) {
    return this.workingDaysService.create(createWorkingDayInput);
  }

  @Query('workingDays')
  findAll(@Args('orderBy') orderBy?: OrderByParams) {
    return this.workingDaysService.findAll(orderBy);
  }

  @Query('workingDay')
  findOne(@Args('id') id: number) {
    return this.workingDaysService.findOne({ id });
  }
}
