// --------------------------------------------------------------------------------------------------------------------

export type WrappedIntoString<T> =
	T extends null | undefined
		? ''
		: T extends string | number | bigint | boolean
			? `${T}`
			: T extends Date
				? `${number}`
				: T extends Array<infer U>
					? WrappedIntoString<U>[]
					: {
						[key in keyof T]: WrappedIntoString<T[key]>
					}


type T1 = WrappedIntoString<null>

type T2 = WrappedIntoString<123>

type T3 = WrappedIntoString<1 | 2 | 3>

type T4 = WrappedIntoString<{ id: number, name: string | undefined }>

type T5 = WrappedIntoString<{ labels: { status: '1' | 2 | undefined, value: string }[] }>

type Issue = {
	id: number
	createdAt: Date | null
	state: 'closed' | 'success'
	category: 0 | 1 | 2 | 3
	childern: Issue[]
}

type IssueFromAPI = WrappedIntoString<Issue>

const issue : IssueFromAPI = DUMMY_IMPLEMENTATION

// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

type FieldInfo<Type extends FieldType = FieldType> = {
	type: Type
	hidden?: boolean
	validation?: string[]
	defaultValue?: unknown
} & FieldData[Type]

type FieldType = 'section' | 'text' | 'select' | 'percentage'

type FieldData = {
	section: SectionFieldData
	text: TextFieldData
	select: SelectFieldData
	percentage: PercentageFieldData
}

type SectionFieldData = {
	title: string
	content: Record<string, FieldInfo>
}

type TextFieldData = {
	title: string
	multiline?: boolean
}

type SelectFieldData = {
	title: string
	entries: Record<string, string>
}

type PercentageFieldData = {
	title: string
	minimum?: number
	maximum?: number
}

// wrapper to make it fully typesafe
const Field = <Type extends FieldType>(field: FieldInfo<Type>): FieldInfo<Type> => field

const fieldInfos: FieldInfo[] = [
	{
		type: 'percentage',
		title: 'Amount',
		multiline: true // should not be valid on a percentage field
	},
	Field({
		type: 'percentage',
		title: 'Amount',
		multiline: true // now it shows an error
	})
]

// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

// https://github.com/ivanhofer/typesafe-utils

// https://github.com/ivanhofer/typesafe-i18n

// https://github.com/ivanhofer/typesafe-api-endpoints
