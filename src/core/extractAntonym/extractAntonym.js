import cheerify from '../../helpers/cheerify';

const extractAntonym = senseMarkup => {
    const $ = cheerify(senseMarkup);

    return $('.OPP').contents().not('.synopp').text().trim();
}

export default extractAntonym;
