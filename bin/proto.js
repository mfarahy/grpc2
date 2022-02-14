const { existsSync, mkdir, mkdirSync } = require('fs');
const { join } = require('path');
const { exec } = require('shelljs');

const PROTO_PATH = join(__dirname, './../protos');
const MODEL_PATH = join(__dirname, './../src/models');
const PROTO_EXE_PATH = join(__dirname, 'protoc.exe');
const PROTO_TS_PLUGIN_PATH = join(__dirname, '../node_modules/.bin/protoc-gen-ts_proto.cmd');

if (!existsSync(MODEL_PATH)) mkdirSync(MODEL_PATH);

const config = [
  'protoc',
  `--plugin=protoc-gen-ts_proto=${PROTO_TS_PLUGIN_PATH}`,
  '--ts_proto_opt=outputServices=grpc-js,env=node,useOptionals=true,exportCommonSymbols=false,esModuleInterop=true',

  `--ts_proto_out=${MODEL_PATH}`,
  `--proto_path=${PROTO_PATH} ${PROTO_PATH}/*.proto`,
];

exec(config.join(' '), (e, out, int) => {
  console.log(e, out, int);
});
