export interface WordData {
    headword: string
    pronunciation: string
    frequency: string
    entries: EntryData[]
}

export interface EntryData {
    senses: SenseData[]
}

export interface SenseData {
    definition: string
    situation: string
    geography: string
    synonym: string
    antonym: string
    examples: string[]
    exampleGroups: ExampleGroup[]
    subsenses: SenseData[]
}

export interface ExampleGroup {
    examples: string[]
    form: string
}

export interface CardData {
    example: string
    form: string
    headword: string
    pronunciation: string
    frequency: string
    definition: string
    situation: string
    geography: string
    synonym: string
    antonym: string
}

export interface Card {
    front: string
    back: string
}

type WordIsLoading = 'WORD IS LOADING'
export const WordIsLoading: WordIsLoading = 'WORD IS LOADING'

export enum WordFetchError {
    NotFound = 'FETCH ERROR: NOT FOUND',
    Offline = 'FETCH ERROR: OFFLINE'
}

type WordFetchResult = WordIsLoading | WordFetchError | CardData[]
