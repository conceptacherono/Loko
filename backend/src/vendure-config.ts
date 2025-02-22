import { VendureConfig } from '@vendure/core';

export const config: VendureConfig = {
  apiOptions: {
    port: 3000,
  },
  dbConnectionOptions: {
    type: 'sqlite',
    synchronize: true,
    database: 'vendure.sqlite',
  },
  authOptions: {
    superadminCredentials: {
      identifier: 'superadmin',
      password: 'superadmin',
    },
  },
  plugins: [],
};
