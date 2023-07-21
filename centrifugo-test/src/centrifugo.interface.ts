import { Observable } from 'rxjs';

interface CentrifugoApiServiceService {
  Publish(data: PublishRequest): Observable<PublishResponse>;
}
interface PublishRequest {
  channel: string;
  data: any;
}

interface PublishResponse {
  error: Error;
  result: PublishResult;
}

interface Error {
  code: number;
  message: string;
}

interface PublishResult {
  offset: number;
  epoch: string;
}

export { CentrifugoApiServiceService, PublishResponse };
