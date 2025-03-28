// Extract First and Last Element of Tuple using Generic.

type First<T extends unknown[]> = T[0];
// type First<T> = T extends [infer F, ...infer L] ? F : never;
type Last<T> = T extends [...infer F, infer L] ? L : never;

type A = First<[1, 2, 3]>; // Res: 1
type D = Last<['JSGenie', 'is', 'awesome']>; // Res: "awesome"

export {};
