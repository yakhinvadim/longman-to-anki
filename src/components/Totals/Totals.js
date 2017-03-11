import React, { PropTypes, PureComponent } from 'react';
import maybePluralize from '../../utils/maybePluralize/maybePluralize';

export default class Totals extends PureComponent {
	static propTypes = {
		wordsTotal: PropTypes.number,
		cardsTotal: PropTypes.number
	}

	static defaultProps = {
		wordsTotal: 0,
		cardsTotal: 0
	}

	render() {
		const wordsTotal = maybePluralize(this.props.wordsTotal, 'word');
		const cardsTotal = maybePluralize(this.props.cardsTotal, 'card');

		return (
			<span className='App__total'>
				{wordsTotal}, {cardsTotal}
			</span>
		);
	}
}
