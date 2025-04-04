const safeParseFloat = <
  V extends string | number | undefined | null,
  DF = undefined,
>(
  value: V,
  defaultValue?: DF,
): number | DF => {
  if (value === undefined || value === null) {
    return defaultValue ?? (null as DF);
  }

  const parsedValue = parseFloat(value.toString());

  return isNaN(parsedValue) ? (defaultValue as DF) : parsedValue;
};

export default safeParseFloat;
