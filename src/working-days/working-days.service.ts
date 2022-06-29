import { Injectable } from '@nestjs/common';
import { CreateWorkingDayInput } from './dto/create-working-day.input';
import { UpdateWorkingDayInput } from './dto/update-working-day.input';

@Injectable()
export class WorkingDaysService {
  create(createWorkingDayInput: CreateWorkingDayInput) {
    return 'This action adds a new workingDay';
  }

  findAll() {
    return [
      {
        exampleField: 1,
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} workingDay`;
  }
}
