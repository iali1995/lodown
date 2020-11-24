'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: takes a parameter for any value, and returns it completely
 * unaltered.
 * 
 * @param {Array, Boolean, String, Number, Null, Undefined, Object, Function } : any value
 * 
 * @returns {Array, Boolean, String, Number, Null, Undefined, Object, Function } : returns the same
 * value unaltered
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Takes any value and runs it through an if else chain, checks it against the typeof, Array.isarray(),
 * value === null, and instanceof date methods, and returns a string based on which condition evaluates to be
 * true.
 * 
 * @param {Array, Boolean, String, Number, Null, Undefined, Object, Function } value: any value
 * 
 * @returns {String}: returns the correct data type in the form of a string;
 */
 
 function typeOf(value) {
     if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    } else if (value instanceof Date) {
        return 'date';
    } else if (typeof value === 'object') {
        return 'object';
    } else if (typeof value === 'string') {
        return 'string';
    } else if (typeof value === 'number') {
        return 'number';
    } else if (typeof value === 'boolean') {
        return 'boolean';
    } else if (typeof value === 'undefined') {
        return 'undefined';
    } else if (typeof value === 'function') {
        return 'function';
    }
 }
 module.exports.typeOf = typeOf;
 
 
 /**
  * first: takes an array and a number, if the argument for array is an array it will return however
  * many elements that number defines from the beginning of the array. If the argument passed for array is not an 
  * array then first will return an empty array. If the number param is higher than the length of
  * the array, it will return the whole array. If number argument is not a number and or is not  
  * passed, first will return only the first element of the array. 
  * 
  * @param {Array} collection: It will take an array of values
  * @param {Number} number: It will also take any number as an argument
  * 
  * @returns {Array} : returns an empty array if collection is not an array or number is less than 0, returns whole
  * array if number is higher than collection length, returns modified array if all conditions are met
  * */
  function first(array, number) {
    if (typeOf(array) !== 'array') {
        return [];
    } else if (typeOf(number) !== 'number' || number === undefined) {
        return array[0];
    } else if (number <= 0) {
        return [];
    }else if (number > array.length) {
        return array;
    } else {
        return array.slice(0, number);
    }
  }
  module.exports.first = first;
  
  
  
  /***
   * last: Last takes an array and a number as arguments and returns however many elements from the end of 
   * the array. If the argument passed for array is not an array it returns an empty array.
   * 
   * @param {Array} collection: a collection of any values to be iterated over
   * @param {Number} ammount of elements : the number of elements asked to be return from the end of the array
   * 
   * @returns {Array} collection : an array of the last elements, specified by number, of the array passed as an argument. 
   * If not then returns an empty array.
   */
   
   function last(array, number) {
    if (typeOf(array) !== 'array') {
       return [];
    } else if (typeOf(number) !== 'number' || number === undefined) {
       return array[array.length - 1];
    } else if (number <= 0) {
       return [];
    } else if (number >= array.length) {
       return array;
    } else {
        return array.slice(number - 1, array.length);
    }
   }
   module.exports.last = last;
   
   
   /**
    * indexOf: Takes an array and any value as parameters and returns the first index in the array at which the corresponding
    * value argument is found. If the value is not found within the array, it returns -1;
    * 
    * @param {Array} collection: A collection of values in the form of an array
    * @param {String, Number, Boolean} a value: Any value that can be stored in an array
    * 
    * @returns {Number} index: returns a number representing the index at which the corresponding value is found
    */
    
    function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
      } return -1;
    }
    module.exports.indexOf = indexOf;
    
    
    
    
    
    /**
     * contains: Takes an array and a value and uses a for loop to iterate through the
     * elements in the array argument, to check whether the given value is inside of the array argument
     * 
     * @param {Array} collection: a collection of values to be iterated over
     * @param {String, Number, Boolean, Undefined, Null} any value: to check if it exists within
     * 
     * @returns {Boolean} true or false: true if the array contains said value, or false of array does not.
     *
     */
     
function contains(array, value) {
    for (var i = 0; i < array.length; i++) {
       if (array[i] === value ? true : false) {
           return true;
          }      
    } return false;
}
module.exports.contains = contains;









/*
 * unique: unique iterates through an array and removes all duplicates before creating a new
 * array with the unique values.
 *
 * @param {Array} collection: an array of values with possible duplicates inside
 * 
 * @returns {Array} collection: an array of values with all duplicates removed
 * 
 */

function unique(array) {
    let newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (indexOf(array, array[i]) === i) {
            newArr.push(array[i]);
        }
    } return newArr;
}
module.exports.unique = unique;









/*
* filter: iterates through an array an applies a function on each argument within the array 
* and adds the values that evaluate to be true to a new array before returning it.
* 
* @param {Array} collection: an array of values to pass through the given function
* @param {Function} action: a function that takes each element within the array as parameter to determine
* if the result will be true or false
* 
* @returns {Array} collection: A new array with all values that evaluated to true through the given
* function.
* 
*/

function filter(array, funct) {
let arr = [];
  for (var i = 0; i < array.length; i++) {
   if (funct(array[i], i, array)) {
       arr.push(array[i]);
    }
  }return arr;
}
module.exports.filter = filter;







/**
 * reject: iterates over an array of values and passes each of them through a given function
 * and adds all values that evaluate to be false into a new array before returning the new array
 * 
 * @param {Array} collection: an array of values to each be passed through a function to evaluate
 * to be either true or false
 * @param {Function} action: a function that evaluates whether each value in the given array evaluates
 * to true or false.
 * 
 * @returns {Array} collection: a new array that contains all values that were evaluated to be false by
 * the given function
 */

function reject(array, test) {
let arr = [];
for (var i = 0; i < array.length; i++) {
    if (test(array[i], i, array) === false) {
        arr.push(array[i]);
    }
  }
  return arr;
}
module.exports.reject = reject;










/***
 * partition: takes a given array of values and passes each value through a given function which
 * evaluates each value to be either true or false. Creates a new array that contains two sub arrays
 * within, and sorts each value to it's own sub array depending on whether the value evaluates to be
 * true or false.
 * 
 * @param {Array} collection: an array with values to each be passed through the given function
 * @param {Function} action: a given function which tests each value of the array and evaluates
 * the values to be either true or false;
 * 
 * @returns {Array} collection: returns a singular array that contains two sub arrays. One sub array
 * contains all the truthy values and the other contains all of the falsy values
 */
function partition(array, funct) {
    let arr = [[],[]];
  for (var i = 0; i < array.length; i++) {
      if(funct(array[i], i , array)) {
          arr[0].push(array[i]);
      } else if (funct(array[i], i, array) === false) {
          arr[1].push(array[i]);
      }
  } return arr;
}
module.exports.partition = partition;









/***
 * map: takes a given collection of values, tests it to determine whether it's an array or an object. If it's
 * an array it applies the given function that takes the element, the index and if need be the whole array as paramters. if it's an 
 * object it applies the given function that takes the value, then key and if need be the whole object as parameters. Then in either
 * case it takes the values returned by the function, adds them to a new array before returning the new array of values.
 * 
 * @param {Array, Object} collection: either an array or object of values to be passed through the given function
 * @param {Function} action: a given function that takes either the element, index and array as parameters if it's an array
 * or the value, key and object as parameters if it's an object
 * 
 * @returns {Array} collection: adds all the resulting values from the given function into a new array before returning it
 */

function map(collection, funct) {
    let arr = [];
 if (typeOf(collection) === 'array') {
       for (var i = 0; i < collection.length; i++) {
          arr.push(funct(collection[i],i,collection));
         } return arr;
       } else {
       for (var key in collection) {
          arr.push(funct(collection[key],key,collection));
       }
    } return arr;
}
module.exports.map = map;









/***
 * pluck: takes a given array of objects and a given property and iterates over each element of the given array
 * and adds the value of the given property to a new array before returning it.
 * 
 * @param {Array} collection: an array containing multiple objects
 * @param {String} property: a key that references to a property inside of each object
 * 
 * @returns {Array} collection: an array with all the values that were referenced to by the given property
 */

function pluck(array, property) {
    return map(array, function(value) {
        return value[property];
    });
}
module.exports.pluck = pluck;










/***
 * every: takes a given collection, either an object or array of values, identifies them and then passes them through a function that
 * takes the element, index and array, if it's an array, or value, key, object if it's an object as parameters and evaluates
 * if all of the function results are true, returns false if even a single result is false
 * 
 * @param {Array, Object} collection: a collection of values to be passed through a given function
 * @param {Function} action: a function which takes either array or an object and their properties as paramters and evaluates them
 * to be either true or false
 * 
 * @returns {Boolean} true or false: returns true if all values passed through function return true, returns false if even
 * a single value returns false
 */
function every(collection, funct) {
   var result = true;
  if (funct !== undefined) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++){
            if (funct(collection[i], i, collection)) {
                result = true;
            } else return result = false;
        }
    } else if (typeof collection === 'object') {
        for (var key in collection) {
            if (funct(collection[key], key, collection)) {
                result = true;
            } else return result = false;
        }
    }
} else if (funct === undefined) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (collection[i]) {
                result = true;
            } else return result = false;
        }
    } else if (typeof collection === 'object') {
        for (var key in collection) {
            if (collection[key]){
                result = true;
            } else return result = false;
        }
    }
  } return result;
}
module.exports.every = every;











/***
 * some: takes a given collection, either an object or array of values, identifies them and then passes them through a function that
 * takes the element, index and array if it's an array or value, key, object if it's an object, as parameters and evaluates
 * if even a single resulting value of the function returns as true, returns false only if all values evaluate to false
 * 
 * @param {Array, Object} collection: a collection of values to be passed through a given function
 * @param {Function} action: a function which takes either array or an object and their properties as parameters and evaluates them
 * to be either true or false
 * 
 * @returns {Boolean} true or false: returns true if even a single result of the given function is true, returns false only if
 * all values return as false from the function
 */

function some(collection, funct) {
  var result = false;
  if (funct !== undefined) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++){
            if (funct(collection[i], i, collection) === false) {
                result = false;
            } else return result = true;
        }
    } else if (typeof collection === 'object') {
        for (var key in collection) {
            if (funct(collection[key], key, collection) === false) {
                result = false;
            } else return result = true;
        }
    }
} else if (funct === undefined) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (collection[i]) {
                result = true;
            } else return result = false;
        }
    } else if (typeof collection === 'object') {
        for (var key in collection) {
            if (collection[key]){
                result = true;
            } else return result = false;
        }
    }
  } return result;
}
module.exports.some = some;




/***
 * reduce: takes an array of numbers, a function, and an initial value. The function starts with the initial
 * seed value and passes it through the given function which takes the previous result, element and index
 * of the array as parameters and applies each resulting value to the next element of the array until a single value
 * is returned
 * 
 * @param {Array} a collection: a collection of  values
 * @param {Function} action: a given function that takes the initial value and applies the result again
 * to the iterated values of the given array
 * @param {String, Number, Booleans} any value, seed: an initial value that is modified through each element of the array via
 * the function and is returned at the end as a different value, 
 * 
 * @returns {String, Number, Boolean, Undefined, Null} any value: after the initial value is altered and passed through the function
 * for each element of the array, returns as a singular concise value
 */
function reduce(array,funct, seed) {
  let result = 0;
  if (seed === undefined) {
      result = array[0];
      for (var i = 1; i < array.length; i++) {
          result = funct(result, array[i], i);
      }
  } else {
      result = seed;
      for (var i = 0; i < array.length; i++) {
          result = funct(result, array[i], i);
      } 
   } return result;
}
module.exports.reduce = reduce;







/***
 * extend: takes atleast two objects, but can take as many as desired iterates through each argument and 
 * the keys of each objects and either replaces or adds a new key to the first object arugment from every
 * given object argument in the order that they are passed.
 * 
 * @param {object} object: an object with how ever many properties to be copied to or from depending on whether
 * it was the first arugment or not.
 *
 * @returns {Object} object: a new object modified by the properties of each object argument passed through
 */
 
function extend() {
    let obj = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
     for (var key in arguments[i]) {
          obj[key] = arguments[i][key];
     }
   } return obj;
}
module.exports.extend = extend;






