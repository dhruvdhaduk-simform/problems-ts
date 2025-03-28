// Create a generic type that extracts the argument type from a function

type ArgumentType<F> = F extends (...args: [...infer A]) => unknown ? A : never;

type Fn = (name: string, age: number) => void;
type A = ArgumentType<Fn>; // Expected: [string, number]

export {};
