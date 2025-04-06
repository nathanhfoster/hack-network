export default {
  process() {
    return {
      code: 'export default {};',
    };
  },
  getCacheKey() {
    return 'cssTransform';
  },
};
