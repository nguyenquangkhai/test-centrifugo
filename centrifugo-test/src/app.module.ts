import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
        {
          name: 'CENTRIFUGO_PACKAGE',
          transport: Transport.GRPC,
          options: {
            package: 'centrifugal.centrifugo.api',
            protoPath: '/Users/khainguyen/Projects/centrifugo/centrifugo-test/proto/api.proto',
            url: 'localhost:10000',
          },
        },
      ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
