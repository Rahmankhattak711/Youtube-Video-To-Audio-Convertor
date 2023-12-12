import { Module } from '@nestjs/common';
import {YoutubeModule} from "./youtube/youtube.module";
import {FLModule} from "./fl/fl.module";

@Module({
  imports:[
      YoutubeModule,
      FLModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
