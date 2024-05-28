import { prisma } from '../../database/prisma';
import {
	carInvalidId,
	carInvalidUpdateMock,
	carValidCreateBodyMock,
	carValidListCreateBodyMock,
	carValidMock,
	carValidUpdateMock,
} from '../__mocks__/car.mocks';
import { carDefaultExpectedResponse } from '../utils/carDefaultExpect';
import { request } from '../utils/request';

describe('Integration tests: update a car', () => {
	test('should be able to update car successfully', async () => {
		const newCar = await prisma.car.create({ data: carValidCreateBodyMock });
		const carUpdated = { ...newCar, ...carValidUpdateMock };

		const data = await request
			.patch(`/cars/${newCar.id}`)
			.send(carValidUpdateMock)
			.expect(200)
			.then((response) => response.body);

		carDefaultExpectedResponse(data, carUpdated);
	});
	test('should throw error when car id is invalid', async () => {
		const data = await request
			.get(`/cars/${carInvalidId}`)
			.expect(404)
			.then((response) => response.body);

		expect(data.message).toBe('Car not found.');
	});
	test('should throw error when update body is invalid', async () => {
		const newCar = await prisma.car.create({ data: carValidCreateBodyMock });
		await request
			.patch(`/cars/${newCar.id}`)
			.send(carInvalidUpdateMock)
			.expect(400);
	});
});
