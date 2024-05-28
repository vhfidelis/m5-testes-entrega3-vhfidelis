import { prisma } from '../../database/prisma';
import {
	carInvalidId,
	carValidCreateBodyMock,
	carValidListCreateBodyMock,
	carValidMock,
} from '../__mocks__/car.mocks';
import { carDefaultExpectedResponse } from '../utils/carDefaultExpect';
import { request } from '../utils/request';

describe('Integration tests: get one car', () => {
	test('should be able to get one car successfully', async () => {
		const newCar = await prisma.car.create({ data: carValidCreateBodyMock });

		const data = await request
			.get(`/cars/${newCar.id}`)
			.expect(200)
			.then((response) => response.body);

		carDefaultExpectedResponse(data, newCar);
	});
	test('should throw error when car id is invalid', async () => {
		const data = await request
			.get(`/cars/${carInvalidId}`)
			.expect(404)
			.then((response) => response.body);

		expect(data.message).toBe('Car not found.');
	});
});
