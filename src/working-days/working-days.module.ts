import { Module } from '@nestjs/common';
import { WorkingDaysService } from './working-days.service';
import { WorkingDaysResolver } from './working-days.resolver';

@Module({
  providers: [WorkingDaysResolver, WorkingDaysService]
})
export class WorkingDaysModule {}
