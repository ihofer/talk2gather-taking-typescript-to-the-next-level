// --------------------------------------------------------------------------------------------------------------------
// # narrowing (type guards)
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html
// --------------------------------------------------------------------------------------------------------------------

const mutiplyBy2 = (value: number | number[]) => {
	if (Array.isArray(value)) {
		return value.map(v => v * 2)
	}

	return value * 2
}

// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

interface Transports {
	name: string
}

interface Car extends Transports {
	drive: () => void
}

interface Plane extends Transports {
	fly: () => void
}

const isCar = (transport: Transports) => DUMMY_IMPLEMENTATION

const isPlane = (transport: Transports) => DUMMY_IMPLEMENTATION

const travelToRome = (transport: Transports) => {
	if (isPlane(transport)) {
		(transport as Plane).fly()
	} else if (isCar(transport)) {
		(transport as Car).drive()
	}
}


const isCarGuard = (transport: Transports): transport is Car => DUMMY_IMPLEMENTATION

const isPlaneGuard = (transport: Transports): transport is Plane => DUMMY_IMPLEMENTATION

const goToRomeGuarded = (transport: Transports) => {
	if (isPlaneGuard(transport)) {
		transport.fly()
	} else if (isCarGuard(transport)) {
		transport.drive()
	}
}

// --------------------------------------------------------------------------------------------------------------------

type UnsafeApiResponse<T> = {
	error?: Error,
	data?: T
}

const unsafeResponse: UnsafeApiResponse<Transports> = DUMMY_IMPLEMENTATION

if (unsafeResponse.error) {
	unsafeResponse.data
	unsafeResponse.error
} else {
	unsafeResponse.data
	unsafeResponse.error
}



type DataResponse<T> = {
	error: undefined,
	data: T
}

type ErrorResponse = {
	error: Error,
	data: undefined
}

type ApiResponse<T> = ErrorResponse | DataResponse<T>

const response: ApiResponse<Transports> = DUMMY_IMPLEMENTATION

if (response.error) {
	response.data
	response.error
} else {
	response.data
	response.error
}
