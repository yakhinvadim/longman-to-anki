import React from 'react';
import R from 'ramda';
import debounce from 'lodash.debounce';

import normalizeWordData from '../../core/normalizeWordData/normalizeWordData';
import composeWordData from '../../core/composeWordData/composeWordData';
import makeCard from '../../core/makeCard/makeCard'

import splitByWord from '../../utils/splitByWord/splitByWord';
import maybePluralize from '../../utils/maybePluralize/maybePluralize';
import composeQuery from '../../utils/composeQuery/composeQuery';

import Header from '../Header/Header';
import ImportOptions from '../ImportOptions/ImportOptions';
import DownloadButton from '../DownloadButton/DownloadButton';
import ResultCards from '../ResultCards/ResultCards';
import UserWords from '../UserWords/UserWords';

import './App.css';

const wordToData = R.memoize(async word => {
	const query = composeQuery(word);
	const markup = await fetch(query).then(response => response.text());
	const wordData = composeWordData(markup);

	return wordData;
})

const sanitizeForFilename = R.pipe(
	R.replace(/ /g, ''),
	R.replace(/,/g, '_')
);

export default class App extends React.Component {
	state = {
		inputValue: '',
		wordsDataArr: [],
		showImportOptions: false
	}

	handleInputChange = async (event) => {
		const inputValue = event.target.value;

		this.setState({
			inputValue
		})

		this.debouncedComposeCards();
	}

	debouncedComposeCards = debounce(
		async () => {
			const words = splitByWord(this.state.inputValue);

			let wordsDataArr = [];
			let i = 0;

			for (let word of words) {
				const wordData = await wordToData(word)
				wordsDataArr[i] = wordData;

				this.setState({
					wordsDataArr
				});

				i++;
			}
		}, 500
	)

	handleDownload = () => {
		this.setState({
			showImportOptions: true
		})
	}

	render() {
		const cardsArr = R.pipe(
			R.map(normalizeWordData),
			R.flatten,
			R.reject(R.isEmpty),
			R.map(makeCard)
		)(this.state.wordsDataArr);

		const cards = R.join('\n')(cardsArr);

		const wordsTotalNumber = this.state.wordsDataArr.length
		const cardsTotalNumber = cardsArr.length;

		const wordsTotal = maybePluralize(wordsTotalNumber, 'word');
		const cardsTotal = maybePluralize(cardsTotalNumber, 'card');

		const totals = `${wordsTotal}, ${cardsTotal}`;

		const date = new Date().toISOString().slice(0, 10);

		return (
			<div className='App'>
				<Header />

				<UserWords
					value={this.state.inputValue}
					onChange={this.handleInputChange}
				/>

				<ResultCards
					value={cards}
				/>

				<div  className='App__download-section'>
					<span className='App__total'>
						{totals}
					</span>
					<DownloadButton
						fileContent={encodeURIComponent(cards)}
						fileName={`longman-to-anki_${date}_${sanitizeForFilename(totals)}`}
						onClick={this.handleDownload}
						disabled={!cards}
					/>
				</div>

				{this.state.showImportOptions && <ImportOptions />}
			</div>
		);
	}
}
