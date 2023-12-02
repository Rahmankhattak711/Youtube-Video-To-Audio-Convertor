import { Injectable } from '@nestjs/common';
import * as ytdl from 'ytdl-core';
import * as ffmpeg from 'fluent-ffmpeg';
import { createWriteStream } from 'fs';
@Injectable()
export class YoutubeService {
  constructor() {
    ffmpeg.setFfmpegPath('C:\\ffmpeg\\ffmpeg.exe');
  }
  async downloadAndConvertToAudio(
    url: string,
    outputFilePath: string,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const videoStream = ytdl(url, { filter: 'audioonly' });
      const audioStream = ffmpeg(videoStream)
        .audioCodec('libmp3lame')
        .format('mp3')
        .on('end', () => resolve())
        .on('error', (err) => reject(err))
        .pipe(createWriteStream(outputFilePath));
    });
  }
}
