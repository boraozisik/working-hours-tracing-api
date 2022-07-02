import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class WorkingDaysService {
  constructor(private prisma: PrismaService) {}

  create(createWorkingDayInput: Prisma.WorkingDayCreateInput) {
    return this.prisma.workingDay.create({
      data: createWorkingDayInput,
    });
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
