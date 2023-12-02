import { Controller, Post, Body } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import * as path from 'path';
import * as fs from 'fs-extra';

@Controller('youtube')
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Post('download')
  async download(@Body() body: { url: string }): Promise<string> {
    const desktopPath = require('path').join(
      require('os').homedir(),
      'Downloads',
    );

    const randonName = Math.floor(Math.random() * 2);
    const outputFileName = `OutputFile_${randonName}.mp3`;
    const outputFilePath = path.resolve(desktopPath, outputFileName);

    await fs.ensureDir(path.dirname(outputFilePath));
    await this.youtubeService.downloadAndConvertToAudio(
      body.url,
      outputFilePath,
    );

    return `Your File is ${outputFilePath}`;
  }
}
