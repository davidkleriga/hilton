import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Room } from './models/Room';

const {localStorage} = window;

const ROOM_INDEX_START = 1; // We use this because at least one room must always be selected

export default class RoomSelectionWidget extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			rooms: props.rooms
		}; // simple state management within component. Insert inital room props into state, then manage internally
	}

	_updateRoomSelection(roomIndex, isChecked) {
		if (isChecked) {
			// update all preceding rooms to be checked
			const precedingRooms = this.state.rooms.slice(ROOM_INDEX_START, roomIndex + ROOM_INDEX_START);
			precedingRooms.forEach(room => room.isActive = true);
		} else {
			// otherwise, uncheck (reset) all successive rooms
			const successiveRooms = this.state.rooms.slice(roomIndex);
			successiveRooms.forEach(room => room.reset());
		}
		this.setState({rooms: this.state.rooms}); //the object is managed properly in memory, but certainly should be pulled up into a redux/action type layer
	}

	_handleCheckChange(room, roomIndex, event) {
		const { target: {checked} } = event;
		console.log('handle check change', {room, event, checked});
		this._updateRoomSelection(roomIndex, checked);
	}

	_generateSelect(identifier, room) {
		const selectConfiguration = room[identifier];
		const onValueChange = (event) => {
			const {target:{value}} = event;
			selectConfiguration.selected = value;
			this.setState({rooms: this.state.rooms});
		};
		return (
			<select className={`${identifier}-count-select`} disabled={!room.isActive} value={selectConfiguration.selected} onChange={onValueChange}>
				{selectConfiguration.range.map(value => <option value={value} key={value}>{value}</option>)}
			</select>
		);
	}

	_getRoomsMarkup() {
		const { rooms } = this.state;

		return rooms.map((room, roomIndex) => {
			const isRoomActive = (room.isDefault || room.isActive);
			const activationCheckbox = <input type="checkbox" checked={isRoomActive} onChange={this._handleCheckChange.bind(this, room, roomIndex)} />;
			const roomListItemClassName = classnames({
				'room-list--item': true,
				'active': (isRoomActive)
			});
			const adultSelect = this._generateSelect('adult', room);
			const childSelect = this._generateSelect('children', room);
			return (
				<li className={roomListItemClassName} key={room.id}>
					<div className="title-container">
						{ room.isDefault ? <span /> : activationCheckbox }
						<strong>Room {room.id}</strong>
					</div>
					<div className="guest-selection">
						<div className="adult-selection">
							<label>Adults</label>
							<label>(18+)</label>
							{adultSelect}
						</div>
						<div className="child-selection">
							<label>Children</label>
							<label>(0-17)</label>
							{childSelect}
						</div>
					</div>
				</li>
			)
		});
	}

	_submitForm() {
		console.log('save form');
		const rooms = this.state.rooms.map(room => room.save());
		localStorage.setItem('rooms', JSON.stringify(rooms));
	}

	render() {
		return (
			<form className="room-container">
				<ul className="room-list">
					{this._getRoomsMarkup()}
				</ul>
				<div className="submit-form__container">
					<input className="submit-form__button" type="submit" onClick={this._submitForm.bind(this)} />
				</div>
			</form>
		);
	}
}

RoomSelectionWidget.propTypes = {
	rooms: PropTypes.arrayOf(PropTypes.instanceOf(Room))
};

export { RoomSelectionWidget };