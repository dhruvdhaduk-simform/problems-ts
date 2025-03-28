// create a generic type GetSurname that  recieves string as argument and it returns second string as type

type Names=["virat kohli","rohit sharma", "shreyas iyer"]

type GetSurname<T>= T extends `${string} ${infer Surname}` ? Surname : never;

type IsKohli=GetSurname<Names[0]>; //"kohli"
type IsSharma=GetSurname<Names[1]>; // "sharma"
type IsIyer=GetSurname<Names[2]>; // "iyer"

// Extract only the last word 
type GetLastWord<T extends string> = T extends `${string} ${infer Suffix}` ? GetLastWord<Suffix> : T;

type L1 = GetLastWord<"The quick brown fox">; // "fox"
type L2 = GetLastWord<"Hello world">;         // "world"

// Swap First and Last Name

type SwapName<T extends string> = T extends `${infer A} ${infer B}` ? `${B} ${A}` : never;

type S1 = SwapName<"John Doe">;      // "Doe John"
type S2 = SwapName<"Alice Johnson">; // "Johnson Alice"