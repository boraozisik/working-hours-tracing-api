import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WorkingDaysService } from './working-days.service';
import { CreateWorkingDayInput } from './dto/create-working-day.input';
import { UpdateWorkingDayInput } from './dto/update-working-day.input';
import { Prisma } from '@prisma/client';

@Resolver('WorkingDay')
export class WorkingDaysResolver {
  constructor(private readonly workingDaysService: WorkingDaysService) {}

  @Mutation('createWorkingDay')
  create(
    @Args('createWorkingDayInput')
    createWorkingDayInput: Prisma.WorkingDayCreateInput,
  ) {
    return this.workingDaysService.create(createWorkingDayInput);
  }

  @Query('workingDays')
  findAll() {
    return this.workingDaysService.findAll();
  }

  @Query('workingDay')
  findOne(@Args('id') id: number) {
    return this.workingDaysService.findOne({ id });
  }
}
