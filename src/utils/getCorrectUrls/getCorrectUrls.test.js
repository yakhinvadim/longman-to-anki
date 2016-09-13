import getCorrectUrls from './getCorrectUrls';
import composeQuery from '../composeQuery/composeQuery.js';

it('returns correct urls for 1 page word "deliberately"', () => {
  return getCorrectUrls("deliberately")
    .then(urls => expect(urls).toEqual([
      composeQuery({ type: 'entry', word:'deliberately' })
    ]))
});

it('returns correct urls for 2 pages word "crank"', () => {
  return getCorrectUrls("crank")
    .then(urls => expect(urls).toEqual([
      composeQuery({ type: 'entry', word:'crank_1' }),
      composeQuery({ type: 'entry', word:'crank_2' })
    ]))
});

it('returns correct urls for 3 pages word "front"', () => {
  return getCorrectUrls("front")
    .then(urls => expect(urls).toEqual([
      composeQuery({ type: 'entry', word:'front_1' }),
      composeQuery({ type: 'entry', word:'front_2' }),
      composeQuery({ type: 'entry', word:'front_3' })
    ]))
});

it('returns correct urls for 4 pages word "cool"', () => {
  return getCorrectUrls("cool")
    .then(urls => expect(urls).toEqual([
      composeQuery({ type: 'entry', word:'cool_1' }),
      composeQuery({ type: 'entry', word:'cool_2' }),
      composeQuery({ type: 'entry', word:'cool_3' }),
      composeQuery({ type: 'entry', word:'cool_4' }),
    ]))
});
