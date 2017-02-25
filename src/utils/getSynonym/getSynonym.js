import cheerify from '../cheerify/cheerify.js';

const getSynonym = senseMarkup => {
    const $ = cheerify(senseMarkup);

    return $('.SYN').contents().not('.synopp').text().trim();
}

export default getSynonym;
