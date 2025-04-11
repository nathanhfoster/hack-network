import { mergeConfig } from 'vite';
import { resolve } from 'path';

export default {
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': resolve(__dirname, '../src'),
        },
      },
    });
  },
};
