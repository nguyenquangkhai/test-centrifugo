import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  CentrifugoApiServiceService,
  PublishResponse,
} from './centrifugo.interface';

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

  publish(): Observable<PublishResponse> {
    console.log(this.centrifugoApiService);
    const publishResponse = this.centrifugoApiService.Publish({
      channel: '1',
      data: 'eyAidGV4dCI6ICJoZWxsbyBmcm9tIG5lc3QiIH0=',
    });
    console.log(publishResponse);
    return publishResponse;
  }
}
