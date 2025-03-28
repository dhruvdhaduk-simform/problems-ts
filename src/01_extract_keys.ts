// Extract all keys of an object as an array of strings

const user = { name: 'John', age: 30 };

type K = keyof typeof user;

const keys = Object.keys(user) as K[];

console.log(keys);

export {};
