import isNil from './isNil';

const removeNilValues = (obj: object) => {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => !isNil(v)));
};

export default removeNilValues;
