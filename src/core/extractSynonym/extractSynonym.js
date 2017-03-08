import cheerify from '../../helpers/cheerify';

const extractSynonym = senseMarkup => {
    const $ = cheerify(senseMarkup);

    return $('.SYN').contents().not('.synopp').text().trim();
}

export default extractSynonym;
