/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export interface Greeting {
  firtName: string;
  lastName: string;
}

export interface GreetRequest {
  greeting?: Greeting;
}

export interface GreetResponse {
  result: string;
}

function createBaseGreeting(): Greeting {
  return { firtName: "", lastName: "" };
}

export const Greeting = {
  encode(
    message: Greeting,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.firtName !== "") {
      writer.uint32(10).string(message.firtName);
    }
    if (message.lastName !== "") {
      writer.uint32(18).string(message.lastName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Greeting {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreeting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.firtName = reader.string();
          break;
        case 2:
          message.lastName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Greeting {
    return {
      firtName: isSet(object.firtName) ? String(object.firtName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
    };
  },

  toJSON(message: Greeting): unknown {
    const obj: any = {};
    message.firtName !== undefined && (obj.firtName = message.firtName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Greeting>, I>>(object: I): Greeting {
    const message = createBaseGreeting();
    message.firtName = object.firtName ?? "";
    message.lastName = object.lastName ?? "";
    return message;
  },
};

function createBaseGreetRequest(): GreetRequest {
  return { greeting: undefined };
}

export const GreetRequest = {
  encode(
    message: GreetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.greeting !== undefined) {
      Greeting.encode(message.greeting, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.greeting = Greeting.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GreetRequest {
    return {
      greeting: isSet(object.greeting)
        ? Greeting.fromJSON(object.greeting)
        : undefined,
    };
  },

  toJSON(message: GreetRequest): unknown {
    const obj: any = {};
    message.greeting !== undefined &&
      (obj.greeting = message.greeting
        ? Greeting.toJSON(message.greeting)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GreetRequest>, I>>(
    object: I
  ): GreetRequest {
    const message = createBaseGreetRequest();
    message.greeting =
      object.greeting !== undefined && object.greeting !== null
        ? Greeting.fromPartial(object.greeting)
        : undefined;
    return message;
  },
};

function createBaseGreetResponse(): GreetResponse {
  return { result: "" };
}

export const GreetResponse = {
  encode(
    message: GreetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GreetResponse {
    return {
      result: isSet(object.result) ? String(object.result) : "",
    };
  },

  toJSON(message: GreetResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GreetResponse>, I>>(
    object: I
  ): GreetResponse {
    const message = createBaseGreetResponse();
    message.result = object.result ?? "";
    return message;
  },
};

export const GreetServiceService = {
  greet: {
    path: "/greet.GreetService/Greet",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GreetRequest) =>
      Buffer.from(GreetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GreetRequest.decode(value),
    responseSerialize: (value: GreetResponse) =>
      Buffer.from(GreetResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GreetResponse.decode(value),
  },
} as const;

export interface GreetServiceServer extends UntypedServiceImplementation {
  greet: handleUnaryCall<GreetRequest, GreetResponse>;
}

export interface GreetServiceClient extends Client {
  greet(
    request: GreetRequest,
    callback: (error: ServiceError | null, response: GreetResponse) => void
  ): ClientUnaryCall;
  greet(
    request: GreetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GreetResponse) => void
  ): ClientUnaryCall;
  greet(
    request: GreetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GreetResponse) => void
  ): ClientUnaryCall;
}

export const GreetServiceClient = makeGenericClientConstructor(
  GreetServiceService,
  "greet.GreetService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): GreetServiceClient;
  service: typeof GreetServiceService;
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
