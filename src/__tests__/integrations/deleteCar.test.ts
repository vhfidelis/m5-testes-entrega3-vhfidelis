import { prisma } from '../../database/prisma';
import { carInvalidId, carValidCreateBodyMock } from '../__mocks__/car.mocks';
import { request } from '../utils/request';

describe('Integration tests: delete a car', () => {
	test('should be able to delete a car successfully', async () => {
		const newCar = await prisma.car.create({ data: carValidCreateBodyMock });

		const data = await request.delete(`/cars/${newCar.id}`).expect(204);
	});
	test('should throw error when car id is invalid', async () => {
		const data = await request
			.get(`/cars/${carInvalidId}`)
			.expect(404)
			.then((response) => response.body);

		expect(data.message).toBe('Car not found.');
	});
});
