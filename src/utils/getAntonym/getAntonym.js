import cheerify from '../cheerify/cheerify.js';

const getAntonym = senseMarkup => {
    const $ = cheerify(senseMarkup);

    return $('.OPP').contents().not('.synopp').text().trim();
}

export default getAntonym;
