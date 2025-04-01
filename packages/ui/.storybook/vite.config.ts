import { mergeConfig } from 'vite';
import { resolve } from 'path';

export default {
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': resolve(__dirname, '../src'),
          '@atoms': resolve(__dirname, '../src/lib/atoms'),
          '@molecules': resolve(__dirname, '../src/lib/molecules'),
          '@organisms': resolve(__dirname, '../src/lib/organisms'),
          '@templates': resolve(__dirname, '../src/lib/templates'),
        },
      },
    });
  },
};
