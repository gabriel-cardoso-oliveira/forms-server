import { Test, TestingModule } from '@nestjs/testing';
import { TestService } from './task.service';

describe('TestService', () => {
  let provider: TestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestService],
    }).compile();

    provider = module.get<TestService>(TestService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
