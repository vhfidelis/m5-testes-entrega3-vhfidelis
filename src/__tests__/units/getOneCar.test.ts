import { container } from 'tsyringe';
import { CarsService } from '../../services';
import { prismaMock } from '../__mocks__/prisma';
import { carValidMock } from '../__mocks__/car.mocks';

describe('Unit test: get one cars', () => {
	test('Should be able to get one car correctly', async () => {
		prismaMock.car.findFirst.mockResolvedValue(carValidMock);
		const carServices = container.resolve(CarsService);
		const data = await carServices.retrieve(carValidMock.id);

		expect(data).toStrictEqual(carValidMock);
	});
});
