import { GreetRequest, GreetResponse } from '../../models/greet';

export default class GreetService {
  public Greet = (request: GreetRequest): GreetResponse => {
    return {
      result: ['hello', request.greeting?.firtName, request.greeting?.lastName].join(' '),
    };
  };
}
