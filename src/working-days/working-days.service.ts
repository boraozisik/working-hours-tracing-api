import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CreateWorkingDayInput } from './dto/create-working-day.input';
import { UpdateWorkingDayInput } from './dto/update-working-day.input';

@Injectable()
export class WorkingDaysService {
  constructor(private prisma: PrismaService) {}

  create(createWorkingDayInput: CreateWorkingDayInput) {
    return 'This action adds a new workingDay';
  }

  findAll() {
    return this.prisma.workingDay.findMany();
  }

  findOne(workingDayWhereUniqueInput: Prisma.WorkingDayWhereUniqueInput) {
    return this.prisma.workingDay.findUnique({
      where: workingDayWhereUniqueInput,
    });
  }
}
