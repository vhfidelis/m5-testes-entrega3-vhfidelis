import { prisma } from '../../database/prisma';
import { carValidListCreateBodyMock } from '../__mocks__/car.mocks';
import { carDefaultExpectedResponse } from '../utils/carDefaultExpect';
import { request } from '../utils/request';

describe('Integration tests: List cars', () => {
	test('shoud be able to get many cars successfully', async () => {
		await prisma.car.createMany({ data: carValidListCreateBodyMock });

		const data = await request
			.get('/cars')
			.expect(200)
			.then((response) => response.body);

		expect(data).toHaveLength(carValidListCreateBodyMock.length);
		for (let i = 0; i < data.length; i++) {
			carDefaultExpectedResponse(data[i], carValidListCreateBodyMock[i]);
		}
	});
});
