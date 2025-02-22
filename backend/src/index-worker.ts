import { runWorker } from '@vendure/core';
import { config } from './vendure-config';

runWorker(config)
  .then(() => console.log('Vendure worker started!'))
  .catch(err => console.error('Failed to start worker', err));
