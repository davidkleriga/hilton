
const DEFAULT_ROOM_PROPERTIES = {
	id: 0,
	isActive: false,
	isDefault: false,
	adult: {
		range: [1, 2, 3],
		selected: 1
	},
	children: {
		range: [0,1,2],
		selected: 0
	}
};

export default class Room {

	constructor(roomProperties = {} ) {
		const mergedProps = Object.assign({}, DEFAULT_ROOM_PROPERTIES, roomProperties);
		const objectCopy = JSON.parse(JSON.stringify(mergedProps)); //this is the most efficient way to guarante a complete copy (by value) of a nested object
		Object.assign(this, objectCopy);
	}

	resetCounts() {
		this.adult.selected = DEFAULT_ROOM_PROPERTIES.adult.selected;
		this.children.selected = DEFAULT_ROOM_PROPERTIES.children.selected;
	}

	reset() {
		this.resetCounts();
		this.isActive = false;
	}

	save() {
		const {id, isActive, isDefault, adult, children} = this;
		const cleanObject = {id, isActive, isDefault, adult, children};
		//currently this method just prepares this object for saving
		// with an api, rooms could save separately or together
		return cleanObject;
	}
}

export { Room };