import * as R from 'ramda'

const splitByWord = R.pipe(
    R.split('\n'),
    R.map(R.toLower),
    R.map(R.trim),
    words => words.filter(word => word.length)
)

export default splitByWord
