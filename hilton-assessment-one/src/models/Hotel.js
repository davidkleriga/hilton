
let HOTEL_IDENTITY = 1;
const DEFAULT_HOTEL_PROPERTIES = {
	id: HOTEL_IDENTITY++,
	coverImage: undefined,
	displayName: 'Hilton Chicago',
	address: {
		street: '720 South Michigan Avenue',
		state: 'Chicago',
		city: 'Illinois',
		zip: '60605'
	},
	phoneNumber: '1-312-922-4400'
};

export default class Hotel {

	constructor(hotelProperties = DEFAULT_HOTEL_PROPERTIES ) {
		Object.assign(this, hotelProperties);
	}

	save() {
		const {id, coverImage, displayName, address, phoneNumber} = this;
		const cleanObject = {id, coverImage, displayName, address, phoneNumber};
		console.log('store clean object', cleanObject);
	}
}

export { Hotel };