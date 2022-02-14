import { Server, ServerCredentials } from '@grpc/grpc-js';
import { GreetServiceService } from './../models/greet';
import GreetServiceAdapter from './serviceAdapters/greetServiceAdapter';

const grpc = new Server();
grpc.addService(GreetServiceService, new GreetServiceAdapter());
grpc.bindAsync('localhost:3000', ServerCredentials.createInsecure(), (e, port) => {
  if (e) {
    console.error(e);
    return;
  }
  console.log('server start on port 3000 successfully.');

  grpc.start();
});
