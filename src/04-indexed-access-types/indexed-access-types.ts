// --------------------------------------------------------------------------------------------------------------------
// # indexed access types
// --------------------------------------------------------------------------------------------------------------------
// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// --------------------------------------------------------------------------------------------------------------------

const transportation = ['bike', 'car', 'bus', 'boat', 'plane', 'space-shuttle'] as const

type Transportation = (typeof transportation)[number]

const isBike = (t: Transportation) => t === 'bike'

isBike('boat')


// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

const pick = <Type, Key extends keyof Type = keyof Type>(property: Key) =>
	(value: Type): Type[Key] => value[property]

interface Product {
	name: string
	price: number
	color: 'red' | 'green' | 'blue'
}

const product1: Product = {
	name: 'not-so-cool-product',
	price: 99,
	color: 'red'
}

const product2: Product = {
	name: 'cool-product',
	price: 999,
	color: 'green'
}

const color = pick<Product>('color')(product1)
const color_ = product1.color

const products = [product1, product2]
const productNames = products.map(pick('name'))
const productNames_ = products.map((product) => product.name)

// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

const values = [1, 10, 5, '10']

const sortedValues_unsafe = values.sort((a, b) => {
	if (a === b) return 0
	return a < b ? -1 : 1
})


const sortNumberASC = (a: number, b: number): number => {
	if (a === b) return 0
	return a < b ? -1 : 1
}

const sortedValues = values.sort(sortNumberASC)

// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

const sortNumberPropertyASC =
	<Type extends { [key in Key]: number }, Key extends keyof Type = keyof Type>(property: Key) =>
		(a: Type, b: Type): number => sortNumberASC(a[property], b[property])


const sortedProductsByPrice = products.sort(sortNumberPropertyASC('price'))

const sortedProductsByPrice_ = products.sort((a, b) => sortNumberASC(a.price, b.price))

