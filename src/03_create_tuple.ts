// Define a generic type that creates a tuple of a specific length

type TupleOf<L, T> = T[] & { length: L };

type A = TupleOf<3, string>; // Expected: [string, string, string]
type B = TupleOf<5, number>; // Expected: [number, number, number, number, number]

export {};
