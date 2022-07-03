import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { WorkingDaysService } from './working-days.service';
import { OrderByParams } from 'src/graphql';
import { Prisma } from '@prisma/client';
import { WorkingDayCreateInput } from 'src/@generated/prisma-nestjs-graphql/working-day/working-day-create.input';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();
@Resolver('WorkingDay')
export class WorkingDaysResolver {
  constructor(private readonly workingDaysService: WorkingDaysService) {}

  @Mutation('createWorkingDay')
  async create(
    @Args('createWorkingDayInput')
    createWorkingDayInput: WorkingDayCreateInput,
  ) {
    const created = await this.workingDaysService.create(createWorkingDayInput);

    const total = await this.workingDaysService.getTotal();

    pubSub.publish('totalUpdated', { totalUpdated: { total } });

    return created;
  }

  @Subscription()
  totalUpdated() {
    return pubSub.asyncIterator('totalUpdated');
  }

  @Query('workingDays')
  findAll(@Args('orderBy') orderBy?: OrderByParams) {
    return this.workingDaysService.findAll(orderBy);
  }

  @Query('workingDay')
  findOne(@Args('id') id: number) {
    return this.workingDaysService.findOne({ id });
  }

  @Query('totalWorkingHours')
  totalWorkingHours() {
    return this.workingDaysService.getTotal();
  }
}
