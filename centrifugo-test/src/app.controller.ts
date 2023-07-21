import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { PublishResponse } from './centrifugo.interface';
import { PublishDto } from './centrifugo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  publish(@Body() publishDto: PublishDto): Observable<PublishResponse> {
    return this.appService.publish(publishDto);
  }
}
