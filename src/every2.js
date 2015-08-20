/* jshint node:true */

'use strict';

/**
 * Tests whether every 2-tuple in the array pass the test
 * implemented by the provided function.
 *
 * @param  {Array} array The array to iterate over
 * @param  {Function} callback The function to call with every 2-tuple
 * @param  {Boolean} thisArg Value to use as this when executing callback
 *
 * @return {Boolean}
 */
module.exports = function every2(array, callback, thisArg) {
  if(array.length < 2) {
    return true;
  }

  var length = array.length;
  var index;

  for (index = 1; index < length; index += 1) {
    if (!callback.call(thisArg, array[index - 1], array[index], index, array)) {
      return false;
    }
  }

  return true;
};
