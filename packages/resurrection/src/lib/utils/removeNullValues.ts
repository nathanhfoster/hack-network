const removeNullValues = (obj: object) => {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== null));
};

export default removeNullValues;
