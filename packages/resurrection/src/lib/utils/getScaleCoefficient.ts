export interface GetScaleCoefficientOptions {
  height: number;
  maxHeight: number;
  width?: number;
  maxWidth?: number;
  fractionDigits?: number;
}

const getScaleCoefficient = (options: GetScaleCoefficientOptions): number => {
  const { height, maxHeight, width, maxWidth, fractionDigits = 4 } = options;

  let heightCoefficient = 1;
  let widthCoefficient = 1;

  if (height > maxHeight) {
    heightCoefficient = Number((maxHeight / height).toFixed(fractionDigits));
  }

  if (width && maxWidth && width > maxWidth) {
    widthCoefficient = Number((maxWidth / width).toFixed(fractionDigits));
  }

  const result = Math.min(heightCoefficient, widthCoefficient);

  return result;
};

export default getScaleCoefficient;
