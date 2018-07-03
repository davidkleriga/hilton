import React from 'react';
import ReactDOM from 'react-dom';
import { HotelPage } from './HotelPage';
import { Hotel } from './models/Hotel';

const applicationElement = document.getElementById('application');
const defaultHotel = new Hotel();
ReactDOM.render(<HotelPage hotel={defaultHotel}/>, applicationElement);

export { HotelPage };