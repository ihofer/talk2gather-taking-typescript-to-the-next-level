// --------------------------------------------------------------------------------------------------------------------
// # generics
// --------------------------------------------------------------------------------------------------------------------
// https://www.typescriptlang.org/docs/handbook/2/generics.html
// --------------------------------------------------------------------------------------------------------------------

const value = { test: true }

const primitiveDeepClone = (value) => DUMMY_IMPLEMENTATION

const clonedValue = primitiveDeepClone(value)

// --------------------------------------------------------------------------------------------------------------------

const primitiveDeepCloneTyped = <Type>(value: Type): Type => DUMMY_IMPLEMENTATION

const clonedValueTyped = primitiveDeepCloneTyped(value)
