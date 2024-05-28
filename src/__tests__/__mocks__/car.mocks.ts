import { TCars, TCarsCreate } from '../../interfaces';

export const carValidCreateBodyMock: TCarsCreate = {
	name: 'Car name',
	description: 'Car description',
	brand: 'Card brand',
	year: 2023,
	km: 10000,
};
export const carValidMock = {
	id: '7e1ae08c-8b61-4378-ac9b-035300c0d3af',
	name: 'Car name',
	description: 'Car description',
	brand: 'Card brand',
	year: 2023,
	km: 10000,
};
export const carInvalidId = {
	id: '7e1ae08c-78k8i7-87787878-a78877878-035300c0d3af',
};
export const carValidUpdateMock = {
	name: 'Car Updated',
	brand: 'Car Updated Brand',
};
export const carInvalidUpdateMock = {
	year: '2023',
};
export const carValidListMock = [
	{
		id: '7e1ae08c-8b61-4378-ac9b-035300c0d3af',
		name: 'Car name',
		description: 'Car description',
		brand: 'Card brand',
		year: 2023,
		km: 10000,
	},
	{
		id: '7e1ae08c-8b61-4378-ac9b-45gw32wg54we',
		name: 'Car',
		description: 'Car',
		brand: 'Card ',
		year: 2088,
		km: 108,
	},
];
export const carValidListCreateBodyMock = [
	{
		name: 'Car name',
		description: 'Car description',
		brand: 'Card brand',
		year: 2023,
		km: 10000,
	},
	{
		name: 'Car 2 name',
		description: 'Car 2 description',
		brand: 'Card 2 brand',
		year: 2024,
		km: 10000,
	},
];
export const carInvalidCreateBodyMock = {
	name: 'Car name',
	description: 'Car description',
	brand: 'Card brand',
	year: '2023',
	km: '10000',
};
