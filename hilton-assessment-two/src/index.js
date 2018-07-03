import React from 'react';
import ReactDOM from 'react-dom';
import { RoomSelectionWidget } from './RoomSelectionWidget';
import { Room } from './models/Room';

const {localStorage} = window; //this could come from a library or at least a wrapper that ensures context compatibility


const applicationElement = document.getElementById('application');
const cachedRooms = localStorage.getItem('rooms');
let rooms;
if (cachedRooms) { //rehyrdate object in case we have business logic in the class
	const storedObject = JSON.parse(cachedRooms);
	rooms = storedObject.map(data => new Room(data));
} else { //if no copy exists, use default values
	rooms =[ 
		new Room({id: 1, isActive: true, isDefault: true}),
		new Room({id: 2}),
		new Room({id: 3}),
		new Room({id: 4})
	];
}
ReactDOM.render(<RoomSelectionWidget rooms={rooms}/>, applicationElement);

export { RoomSelectionWidget };