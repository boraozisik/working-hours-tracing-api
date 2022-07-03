import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { OrderByParams } from 'src/graphql';
@Injectable()
export class WorkingDaysService {
  constructor(private prisma: PrismaService) {}

  create(createWorkingDayInput: Prisma.WorkingDayCreateInput) {
    return this.prisma.workingDay.create({
      data: createWorkingDayInput,
    });
  }

  findAll(orderBy?: OrderByParams) {
    const { field = 'exitedAt', direction = 'desc' } = orderBy || {};
    return this.prisma.workingDay.findMany({
      orderBy: { [field]: direction },
    });
  }

  findOne(workingDayWhereUniqueInput: Prisma.WorkingDayWhereUniqueInput) {
    return this.prisma.workingDay.findUnique({
      where: workingDayWhereUniqueInput,
    });
  }

  async getTotal() {
    const response = await this.prisma.workingDay.aggregate({
      _sum: {
        day: true,
      },
    });
    return response._sum.day * 8;
  }
}
