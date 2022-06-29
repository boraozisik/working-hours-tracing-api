import { Test, TestingModule } from '@nestjs/testing';
import { WorkingDaysService } from './working-days.service';

describe('WorkingDaysService', () => {
  let service: WorkingDaysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkingDaysService],
    }).compile();

    service = module.get<WorkingDaysService>(WorkingDaysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
