import React, { PropTypes, PureComponent } from 'react';
import maybePluralize from '../../helpers/maybePluralize/maybePluralize';

export default class Totals extends PureComponent {
    static propTypes = {
        wordsTotal: PropTypes.number.isRequired,
        cardsTotal: PropTypes.number.isRequired
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
