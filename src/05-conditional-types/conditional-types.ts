// --------------------------------------------------------------------------------------------------------------------
// # conditional types
// --------------------------------------------------------------------------------------------------------------------
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
// --------------------------------------------------------------------------------------------------------------------

const doSomethingMagic = (value: string | number): null | undefined =>
	DUMMY_IMPLEMENTATION // checks if value is a string
		? null
		: undefined


const stringResult1 = doSomethingMagic('hallo')
const numberResult1 = doSomethingMagic(123)

// --------------------------------------------------------------------------------------------------------------------

const doSomethingMoreMagic = <Type extends string | number>(value: Type): Type extends string ? null : undefined =>
	(DUMMY_IMPLEMENTATION // checks if value is a string
		? null
		: undefined
	) as any


const stringResult2 = doSomethingMoreMagic('hallo')
const numberResult2 = doSomethingMoreMagic(123)
