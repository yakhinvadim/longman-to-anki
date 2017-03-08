import cheerify from '../../helpers/cheerify';

const extractAntonym = exampleGroupMarkup => {
    const $ = cheerify(exampleGroupMarkup);

    const antonym =
        $('.PROPFORM, .PROPFORMPREP, .COLLO, .LINKWORD, .LEXUNIT') // all kinds of form classes
            .text()
            .trim();
    
    return antonym;
}

export default extractAntonym;
