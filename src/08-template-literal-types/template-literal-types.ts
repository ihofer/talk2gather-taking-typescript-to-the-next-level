// --------------------------------------------------------------------------------------------------------------------
// # template literal types
// --------------------------------------------------------------------------------------------------------------------
// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
// --------------------------------------------------------------------------------------------------------------------

type NumberString = `${number}`

const number: NumberString = '123'

// --------------------------------------------------------------------------------------------------------------------

type ID = `ID-${number}`

const id: ID = 'ID-123'

// --------------------------------------------------------------------------------------------------------------------

type EmailString = `${string}@${string}.${string}`

type LinkString = `http${'s' | ''}://${string}` // e.g. `https://reporting.offensity.com/api/v1/reports'

type IpString = `${number}.${number}.${number}.${number}` // e.g. '104.83.5.162'

type UuidString = `${string}-${string}-${string}-${string}-${string}` // e.g. 'c9bf9e57-1685-4c89-bafb-ff5af830be8a'

// --------------------------------------------------------------------------------------------------------------------

type ServiceNowDateTimeString = `${number}-${number}-${number} ${number}:${number}:${number}` // e.g. '2021-03-01 13:00:00'

type IntigritiTimestamp = `${number}`

type OffensityDateString = `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z` // e.g. '2021-03-19T11:35:50.102693Z'


const convertToServiceNowDateTimeString = (timestamp: IntigritiTimestamp): ServiceNowDateTimeString => DUMMY_IMPLEMENTATION

type ServiceNowPayload = {
	id: string
	createdAt: ServiceNowDateTimeString
	updatedAt: ServiceNowDateTimeString
}

const serviceNowPayload: ServiceNowPayload = {
	id: '1234',
	createdAt: convertToServiceNowDateTimeString('1635494400000'),
	updatedAt: '1635494400000', // forgot to convert date
}

// --------------------------------------------------------------------------------------------------------------------

const redirectTo = (relativeUrl: string) => DUMMY_IMPLEMENTATION

redirectTo('/code')
redirectTo('code') // should not be allowed
redirectTo('https://www.iteratec.com') // should not be allowed


type RelativeRedirect<URL> = URL extends `/${string}` ? URL : never
const redirectToRelativeUrl = <URL>(relativeUrl: RelativeRedirect<URL>): void => DUMMY_IMPLEMENTATION

redirectToRelativeUrl('/code')
redirectToRelativeUrl('code') // correctly throws an error
redirectToRelativeUrl('https://www.iteratec.com') // correctly throws an error