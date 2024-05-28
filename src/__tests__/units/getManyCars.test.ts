import { container } from 'tsyringe';
import { CarsService } from '../../services';
import { prismaMock } from '../__mocks__/prisma';
import { carValidListMock } from '../__mocks__/car.mocks';

describe('Unit test: get many cars', () => {
	test('Should be able to get many cars correctly', async () => {
		prismaMock.car.findMany.mockResolvedValue(carValidListMock);
		const carServices = container.resolve(CarsService);
		const data = await carServices.list();

		expect(data).toHaveLength(carValidListMock.length);
		expect(data).toStrictEqual(carValidListMock);
	});
});
