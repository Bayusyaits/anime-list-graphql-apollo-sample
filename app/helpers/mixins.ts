export const setSpaceToDash = (val: string, operator: string = '-') => {
  if (!val) {
    return
  }
  return val?.toString().replace(/\s+/g, operator).toLowerCase()
}
 
export const sortByHighestNumber = (arrOfObj: any[], key: string) => {
  return arrOfObj.sort(function(a, b) {
    return b[key] - a[key];
  });
};

export const sortByLowestNumber = (arrOfObj: any[], key: string) => {
  return arrOfObj.sort(function(a, b) {
    return a[key] - b[key];
  });
};

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * shuffle([1, 2, 3, 4])
 * // => [4, 1, 3, 2]
 */
export function shuffle(array: any) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  let index = -1;
  const lastIndex = length - 1;
  const result = [...array];
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return result;
}