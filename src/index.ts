/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('config');
const server = require('@nmxp/next/dist/server');
const nextConfig = require('../next.config.js');

const logOptions = config.get('logOptions');
const httpPort = config.get('server.httpPort');
const httpsPort = config.get('server.httpsPort');

server({ httpPort, httpsPort, logOptions, nextConfig });
