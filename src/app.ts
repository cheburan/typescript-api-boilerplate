import { envs } from './config/env';
import { Server } from './server';

(() => {
  main();
})();

function main(): void {
  const server = new Server({
    apiPrefix: envs.API_PREFIX,
    port: envs.PORT
  });
  void server.start();
}