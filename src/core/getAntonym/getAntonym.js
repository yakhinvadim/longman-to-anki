import cheerify from '../../utils/cheerify/cheerify';

const getAntonym = senseMarkup => {
    const $ = cheerify(senseMarkup);

    return $('.OPP').contents().not('.synopp').text().trim();
}

export default getAntonym;
