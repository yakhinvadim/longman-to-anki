import cheerify from '../../utils/cheerify/cheerify';

export default function getPronunciation(pageMarkup) {
  const $ = cheerify(pageMarkup); 
    
  const pronunciationWrapper = $('.HWD').first().nextAll('.PronCodes');
    
  const britPronunciation = pronunciationWrapper.children('.PRON').text();
  const amerPronunciation = pronunciationWrapper.children('.AMEVARPRON').text();
    
  return britPronunciation + amerPronunciation;
}
