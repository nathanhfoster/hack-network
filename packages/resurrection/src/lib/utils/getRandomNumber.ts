/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomNumber = (min: number, max: number) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
};

export default getRandomNumber;
