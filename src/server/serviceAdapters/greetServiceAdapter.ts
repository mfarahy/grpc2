import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { GreetRequest, GreetResponse, GreetServiceServer } from '../../models/greet';
import GreetService from '../services/greetService';

export default class GreetServiceAdapter implements GreetServiceServer {
  [name: string]: import('@grpc/grpc-js').UntypedHandleCall;

  public greet = (
    call: ServerUnaryCall<GreetRequest, GreetResponse>,
    callback: sendUnaryData<GreetResponse>
  ): void => {
    const service = new GreetService();
    const response = service.Greet(call.request);
    callback(null, response);
  };
}
