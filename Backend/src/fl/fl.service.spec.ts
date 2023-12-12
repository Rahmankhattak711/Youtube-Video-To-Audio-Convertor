import { Test, TestingModule } from '@nestjs/testing';
import { FlService } from './fl.service';

describe('FlService', () => {
  let service: FlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlService],
    }).compile();

    service = module.get<FlService>(FlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
