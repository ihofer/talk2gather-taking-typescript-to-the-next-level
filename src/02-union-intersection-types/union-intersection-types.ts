// --------------------------------------------------------------------------------------------------------------------
// # union types
// --------------------------------------------------------------------------------------------------------------------
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
// --------------------------------------------------------------------------------------------------------------------

const createDateFromValue = (value: number | string) => new Date(value)

createDateFromValue(1635494400000)

createDateFromValue('2021-10-29 10:00')

// --------------------------------------------------------------------------------------------------------------------
// # intersection types
// --------------------------------------------------------------------------------------------------------------------
// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
// --------------------------------------------------------------------------------------------------------------------

type PersonalInfo = { name: string, age: number }

type CareerInfo = { jobTitle: string }

const employee: PersonalInfo & CareerInfo = DUMMY_IMPLEMENTATION

employee

// --------------------------------------------------------------------------------------------------------------------
// # types vs interfaces
// --------------------------------------------------------------------------------------------------------------------
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
// --------------------------------------------------------------------------------------------------------------------

interface IdObjectI {
	id: string
	createdAt: Date
	updatedAt: Date
}

interface ProductI extends IdObject {
	// id: number
	name: string
	price: number
	color: 'red' | 'green' | 'blue'
}


type IdObject = {
	id: string
	createdAt: Date
	updatedAt: Date
}

type Product = IdObject & {
	// id: number
	name: string
	price: number
	color: 'red' | 'green' | 'blue'
}


const typeProduct: Partial<Product> = {
	id: '123'
}

const interfaceProduct: Partial<ProductI> = {
	id: '123'
}

// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

type GetProductResult = {
	product: Product
}

type GetProductsResult = {
	products: Product[]
}

type SuccessResponse<T> = {
	succcess: boolean
} & T


// invalid syntax
interface SuccessResponseI<T> extends T {
	succcess: boolean
}

interface GetProductsSuccessResponseI extends GetProductsResult {
	succcess: boolean
}

interface GetProductSuccessResponseI extends GetProductResult {
	succcess: boolean
}


const t: SuccessResponse<GetProductsResult> = DUMMY_IMPLEMENTATION
const i: GetProductsSuccessResponseI = DUMMY_IMPLEMENTATION
