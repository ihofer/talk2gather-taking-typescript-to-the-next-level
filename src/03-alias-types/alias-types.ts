// --------------------------------------------------------------------------------------------------------------------
// # type aliases
// --------------------------------------------------------------------------------------------------------------------
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
// --------------------------------------------------------------------------------------------------------------------

type ID = string

const doesUserExist = (value: ID) => DUMMY_IMPLEMENTATION

const exists = doesUserExist('44')


// --------------------------------------------------------------------------------------------------------------------

type Priority = 1 | 2 | 3 | 4 | 5

const proirity: Priority = DUMMY_IMPLEMENTATION

proirity === 6 // shows error


// --------------------------------------------------------------------------------------------------------------------
// # symbols
// --------------------------------------------------------------------------------------------------------------------
// https://www.typescriptlang.org/docs/handbook/symbols.html
// --------------------------------------------------------------------------------------------------------------------

const symbol1 = Symbol(1)
const symbol2 = Symbol(1)

symbol1 === symbol2 // is not equal


type Yaml = string

const parseYamlUnsafe = (value: Yaml): string => DUMMY_IMPLEMENTATION


declare const __symbol_yaml: unique symbol

export type YamlString = string & { readonly [__symbol_yaml]: never }


const parseYaml = (value: YamlString): string => DUMMY_IMPLEMENTATION

const normal_string: string = ""
parseYaml(normal_string) // not allowed

const yaml_string: YamlString = "" as YamlString // this would probably come from a toYaml() function or defined in an API-model
parseYaml(yaml_string)


// --------------------------------------------------------------------------------------------------------------------


declare const baseEngagementId: unique symbol
type BaseEngagementId = string & { readonly [baseEngagementId]: never }

type BaseEngagement = {
	id: BaseEngagementId
	title: string
}


declare const localizedEngagementId: unique symbol
type LocalizedEngagementId = string & { readonly [localizedEngagementId]: never }

type LocalizedEngagement = {
	id: LocalizedEngagementId
	createdAt: Date
}


const fetchEngagementDetails = (id: BaseEngagementId) => DUMMY_IMPLEMENTATION

const baseEngagement: BaseEngagement = DUMMY_IMPLEMENTATION
const localizedEngagement: LocalizedEngagement = DUMMY_IMPLEMENTATION

fetchEngagementDetails(baseEngagement.id)
fetchEngagementDetails(localizedEngagement.id) // not allowed