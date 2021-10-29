// --------------------------------------------------------------------------------------------------------------------
// # mapped types
// --------------------------------------------------------------------------------------------------------------------
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// --------------------------------------------------------------------------------------------------------------------

type Transportation = 'bike' | 'car' | 'bus' | 'boat' | 'plane' | 'space-shuttle'

type TransportationMap = {
	[key in Transportation]: boolean
}

const affordableTransportations: TransportationMap = {
	'bike': true,
	'car': false,
	'bus': true,
	'boat': false,
	'plane': false,
	'space-shuttle': false,
}

// --------------------------------------------------------------------------------------------------------------------

type ValueWithoutId<Type extends { id: any }> = {
	[key in keyof Type as Exclude<key, 'id'>]: Type[key]
}

interface Car {
	id: string
	name: string
	price: number
	color: 'red' | 'green' | 'blue'
}

interface Plane {
	id: string
	name: string
	color: 'red' | 'green' | 'blue'
}

type CarWithoutId = ValueWithoutId<Car>
type PlaneWithoutId = ValueWithoutId<Plane>
