import { Test, TestingModule } from '@nestjs/testing';
import { WorkingDaysResolver } from './working-days.resolver';
import { WorkingDaysService } from './working-days.service';

describe('WorkingDaysResolver', () => {
  let resolver: WorkingDaysResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkingDaysResolver, WorkingDaysService],
    }).compile();

    resolver = module.get<WorkingDaysResolver>(WorkingDaysResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
