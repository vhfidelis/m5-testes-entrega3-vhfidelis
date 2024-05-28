import { container } from 'tsyringe';
import {
	carInvalidCreateBodyMock,
	carValidCreateBodyMock,
	carValidMock,
} from '../__mocks__/car.mocks';
import { prismaMock } from '../__mocks__/prisma';
import { CarsService } from '../../services';

describe('Unit test: create car', () => {
	test('create car shold work correctly', async () => {
		const carServices = container.resolve(CarsService);
		prismaMock.car.create.mockResolvedValue(carValidMock);
		const data = await carServices.create(carValidCreateBodyMock);
	});
});
