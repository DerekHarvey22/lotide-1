const tail = require('../tail');
const assertArrayEqual = require("../assertArrayEqual"); 
assertArrayEqual(tail([0, 5]), [5]);
assertArrayEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
