import cheerify from '../../helpers/cheerify';

const extractSynonym = senseMarkup => {
    const $ = cheerify(senseMarkup);

    const synonym =
        $('.SYN') // synonym
            .contents()
            .not('.synopp') // element with text "SYN" or "OPP"
            .text()
            .trim();
    
    return synonym;
}

export default extractSynonym;
