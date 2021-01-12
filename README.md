# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jhein1892/lotide`

**Require it:**

`const _ = require('@jhein1892/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: will find the value at index 0
* `tail`: Will return values for everything but index 0 
* `middle`: Will return the middle values for an array. E.g [1,2,3] will return '2'
* `assertArrayEqual`: Will assert if two arrays are the exact same
* `assertEqual`: will determine if two strings are the same
* `assertObjectEqual`: will assert if two objects are the same
* `countLetters`: Will count the number of letters in a string, not includeing spaces
* `countOnly`: Will count only the values that are specified
* `eqArrays`: Will determine whether two arrays are the same
* `eqObjects`:  will determine whether two objects are equivalent
* `findKey`: Will find the value within a key
* `findKeyByValue`: Will find a key using a value and an object
* `flatten`: Will take a nested array and return a single level array
* `letterPositions`: Will find the index positions of a given letter within a string
* `map`: Will apply a given set of instructions to each element in an array 
* `min`: will return the smallest value in an array
* `takeUntil`: Will return all values until a given value us reached
* `without`: Will return an array with the given values excluded from it. 
  
  