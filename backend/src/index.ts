import { bootstrap } from '@vendure/core';
import { config } from './vendure-config';

bootstrap(config)
  .then(() => console.log('Vendure server started!'))
  .catch(err => console.error('Failed to start server', err));
