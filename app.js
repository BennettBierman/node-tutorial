const la = require('loadash');

const items = [1, [2, [3, 4]]];

const newItems = la.flattenDeep(items);
console.log(newItems);