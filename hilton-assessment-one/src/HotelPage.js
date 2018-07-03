import React from 'react';
import PropTypes from 'prop-types';

import { Hotel } from './models/Hotel';

export default class HotelPage extends React.Component {

	render () {
		const { hotel } = this.props;
		return (
			<div className="hotel-page">
				<header>
					<button className="back-button">&lt; Back</button>
					<h1 className="header__title">Hotel Details</h1>
					<img className="header__image" alt="Logo" src="./hilton-logo.jpg" />
				</header>
				<div className="hotel-preview__container">
					<img className="hotel-preview__image" alt="Hotel Preview" src="./hotelexterior.jpg" />
					<div className="hotel__summary">
						<h2 className="primary-text">{hotel.displayName}</h2>
						<h5 className="address-text">{hotel.address.street}</h5>
						<h5 className="address-text">{`${hotel.address.state}, ${hotel.address.city}, ${hotel.address.zip}`}</h5>
						<a className="link-text underlined">{hotel.phoneNumber}</a>
					</div>
					<ul className="accordion__container">
						<li className="accordion__item">Map</li>
						<li className="accordion__item">Photo Gallery</li>
						<li className="accordion__item">Amenities</li>
					</ul>

				</div>
			</div>
		);
	}
}

HotelPage.propTypes = {
	hotel: PropTypes.instanceOf(Hotel)
};

export { HotelPage };