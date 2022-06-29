import { CreateWorkingDayInput } from './create-working-day.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateWorkingDayInput extends PartialType(CreateWorkingDayInput) {
  id: number;
}
