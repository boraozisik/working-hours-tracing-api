import { Module } from '@nestjs/common';
import { WorkingDaysService } from './working-days.service';
import { WorkingDaysResolver } from './working-days.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService, WorkingDaysResolver, WorkingDaysService],
})
export class WorkingDaysModule {}
