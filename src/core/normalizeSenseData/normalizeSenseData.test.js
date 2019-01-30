import normalizeSenseData from './normalizeSenseData'

const wordData = {
    headword: 'headword',
    pronunciation: 'pronunciation',
    frequency: 'frequency'
}

const basicSenseData = {
    situation: 'situation',
    geography: 'geography',
    definition: 'definition',
    synonym: 'synonym',
    antonym: 'antonym',
    examples: [],
    exampleGroups: [],
    subsenses: []
}

const basicCardData = {
    headword: 'headword',
    frequency: 'frequency',
    situation: 'situation',
    geography: 'geography',
    pronunciation: 'pronunciation',
    definition: 'definition',
    synonym: 'synonym',
    antonym: 'antonym'
}

describe('normalizeSenseData', () => {
    it('correctly normalizes senseData with single example', () => {
        const senseData = {
            ...basicSenseData,
            examples: ['example']
        }

        expect(normalizeSenseData(wordData)(senseData)).toEqual([
            {
                ...basicCardData,
                form: 'headword',
                example: 'example'
            }
        ])
    })

    it('correctly normalizes senseData with several examples', () => {
        const senseData = {
            ...basicSenseData,
            examples: ['example1', 'example2']
        }

        expect(normalizeSenseData(wordData)(senseData)).toEqual([
            {
                ...basicCardData,
                form: 'headword',
                example: 'example1'
            },
            {
                ...basicCardData,
                form: 'headword',
                example: 'example2'
            }
        ])
    })

    it('correctly normalizes senseData with single exampleGroup', () => {
        const senseData = {
            ...basicSenseData,
            exampleGroups: [
                {
                    form: 'form',
                    examples: ['example']
                }
            ]
        }

        expect(normalizeSenseData(wordData)(senseData)).toEqual([
            {
                ...basicCardData,
                form: 'form',
                example: 'example'
            }
        ])
    })

    it('correctly normalizes senseData with several exampleGroups', () => {
        const senseData = {
            ...basicSenseData,
            exampleGroups: [
                {
                    form: 'form1',
                    examples: ['example11', 'example12']
                },
                {
                    form: 'form2',
                    examples: ['example2']
                }
            ]
        }

        expect(normalizeSenseData(wordData)(senseData)).toEqual([
            {
                ...basicCardData,
                form: 'form1',
                example: 'example11'
            },
            {
                ...basicCardData,
                form: 'form1',
                example: 'example12'
            },
            {
                ...basicCardData,
                form: 'form2',
                example: 'example2'
            }
        ])
    })

    it('correctly normalizes senseData with subsenses', () => {
        const senseData = {
            ...basicSenseData,
            subsenses: [
                {
                    ...basicSenseData,
                    examples: ['example1']
                },
                {
                    ...basicSenseData,
                    examples: ['example2']
                }
            ]
        }

        expect(normalizeSenseData(wordData)(senseData)).toEqual([
            {
                ...basicCardData,
                form: 'headword',
                example: 'example1'
            },
            {
                ...basicCardData,
                form: 'headword',
                example: 'example2'
            }
        ])
    })

    it('correctly normalizes senseData with examples, exampleGroups and subsenses', () => {
        const senseData = {
            ...basicSenseData,
            examples: ['example1', 'example2'],
            exampleGroups: [
                {
                    form: 'form3',
                    examples: ['example31', 'example32']
                },
                {
                    form: 'form4',
                    examples: ['example4']
                }
            ],
            subsenses: [
                {
                    ...basicSenseData,
                    examples: ['example5']
                },
                {
                    ...basicSenseData,
                    examples: ['example6']
                }
            ]
        }

        expect(normalizeSenseData(wordData)(senseData)).toEqual([
            {
                ...basicCardData,
                form: 'headword',
                example: 'example1'
            },
            {
                ...basicCardData,
                form: 'headword',
                example: 'example2'
            },
            {
                ...basicCardData,
                form: 'form3',
                example: 'example31'
            },
            {
                ...basicCardData,
                form: 'form3',
                example: 'example32'
            },
            {
                ...basicCardData,
                form: 'form4',
                example: 'example4'
            },
            {
                ...basicCardData,
                form: 'headword',
                example: 'example5'
            },
            {
                ...basicCardData,
                form: 'headword',
                example: 'example6'
            }
        ])
    })

    it('correctly normalizes senseData with no examples, exampleGroups and subsenses', () => {
        const senseData = {
            ...basicSenseData
        }

        expect(normalizeSenseData(wordData)(senseData)).toEqual([
            {
                ...basicCardData,
                form: 'headword',
                example: ''
            }
        ])
    })
})
