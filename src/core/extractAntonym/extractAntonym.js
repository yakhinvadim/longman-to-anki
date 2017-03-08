import cheerify from '../../helpers/cheerify';

const extractAntonym = senseMarkup => {
    const $ = cheerify(senseMarkup);

    const antonym =
        $('.OPP') // OPP means opposite
            .contents()
            .not('.synopp') // element with text "OPP"
            .text()
            .trim();
    
    return antonym;
}

export default extractAntonym;
