import * as R from 'ramda'

export const fixDoubleWhitespace = R.replace(/\s{2,}/gm, ' ')
export const replaceNewlineWithSpace = R.replace(/\n/gm, ' ')
