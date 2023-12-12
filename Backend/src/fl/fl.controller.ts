import { Controller,Get } from '@nestjs/common';
import { FLService } from './fl.service';

@Controller()
export class FLController {
  constructor(private readonly flService: FLService) {}

  @Get('/fetch')
  async fetchData(): Promise<any> {
    return this.flService.fetchData();
  }
}
