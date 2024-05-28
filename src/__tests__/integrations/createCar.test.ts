import { TCars } from '../../interfaces';
import {
	carValidCreateBodyMock,
	carInvalidCreateBodyMock,
} from '../__mocks__/car.mocks';
import { carDefaultExpectedResponse } from '../utils/carDefaultExpect';
import { request } from '../utils/request';

describe('Integration tests: Create Car', () => {
	test('should be able to create a car successfully', async () => {
		const data: TCars = await request
			.post('/cars')
			.send(carValidCreateBodyMock)
			.expect(201)
			.then((response) => response.body);

		carDefaultExpectedResponse(data, carValidCreateBodyMock);
	});
	test('should throw error when body is invalid', async () => {
		await request
			.post('/cars')
			.send(carInvalidCreateBodyMock)
			.expect(400)
			.then((response) => response.body);
	});
});
