import { Test, TestingModule } from '@nestjs/testing';
import { OptionService } from './option.service';

describe('OptionService', () => {
  let provider: OptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OptionService],
    }).compile();

    provider = module.get<OptionService>(OptionService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
