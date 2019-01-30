const maybePluralize = (count: number, noun: string, suffix = 's') =>
    `${count} ${noun}${count !== 1 ? suffix : ''}`

export default maybePluralize
