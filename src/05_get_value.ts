// Create a function that takes an object and a key, then returns the corresponding value

function getValue<T>(obj: T, key: keyof T) {
    return obj[key];
}

const user = { name: 'John', age: 30 };

console.log(getValue(user, 'name')); // Expected: "John"
console.log(getValue(user, 'age')); // Expected: 30

export {};
