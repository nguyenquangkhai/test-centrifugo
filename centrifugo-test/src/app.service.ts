import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  CentrifugoApiServiceService,
  PublishResponse,
} from './centrifugo.interface';
import { PublishDto } from './centrifugo.dto';

@Injectable()
export class AppService implements OnModuleInit {
  private centrifugoApiService: CentrifugoApiServiceService;
  constructor(@Inject('CENTRIFUGO_PACKAGE') private client: ClientGrpc) {}
  getHello(): string {
    return 'Hello World!';
  }

  onModuleInit() {
    this.centrifugoApiService = this.client.getService('CentrifugoApi');
  }

  publish(publishDto: PublishDto): Observable<PublishResponse> {
    const data = {
      text: publishDto.text,
    };
    const b64Data = Buffer.from(JSON.stringify(data)).toString('base64');
    const publishResponse = this.centrifugoApiService.Publish({
      channel: publishDto.channel,
      data: b64Data,
    });
    return publishResponse;
  }
}
