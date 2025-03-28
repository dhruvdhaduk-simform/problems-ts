// create your own generic ReturnType. who only accept function and returns actual return type of given function 

type GetReturnType<T extends (...args: unknown[]) => unknown> = T extends (...args: unknown[]) => infer Ret ? Ret : never;

type T1 = GetReturnType<() => number>;
type T2 = GetReturnType<() => void>
type T3 = GetReturnType<() => { name: string; age: number }>
type T4 = GetReturnType<() => Promise<string>>
