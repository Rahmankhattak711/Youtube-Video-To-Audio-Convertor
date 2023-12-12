import { Module } from '@nestjs/common';
import { FLController } from './fl.controller';
import { FLService } from './fl.service';

@Module({
  imports: [],
  controllers: [FLController],
  providers: [FLService],
})
export class FLModule {}
