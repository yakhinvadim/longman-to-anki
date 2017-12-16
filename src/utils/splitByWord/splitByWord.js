import * as R from 'ramda'

const splitByWord = R.pipe(R.split('\n'), R.map(R.trim), R.reject(R.isEmpty))

export default splitByWord
