import { credentials } from '@grpc/grpc-js';
import { GreetServiceClient } from './../models/greet';

const client = new GreetServiceClient('localhost:3000', credentials.createInsecure());

client.greet(
  {
    greeting: {
      firtName: 'Mohammad Reza',
      lastName: 'Farahy',
    },
  },
  (e, r) => {
    if (e) {
      console.error(e);
      return;
    }
    console.log(r);
  }
);
