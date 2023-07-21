import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { PublishResponse } from './centrifugo.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  publish(): Observable<PublishResponse> {
    return this.appService.publish();
  }
}
