import { container } from 'tsyringe';
import { CarsService } from '../../services';
import { prismaMock } from '../__mocks__/prisma';
import { carValidMock, carValidUpdateMock } from '../__mocks__/car.mocks';

describe('Unit test: update car', () => {
	test('Should be able to update a car correctly', async () => {
		const updatedCar = { ...carValidMock, ...carValidUpdateMock };
		prismaMock.car.update.mockResolvedValue(updatedCar);
		const carServices = container.resolve(CarsService);
		const data = await carServices.update(carValidMock.id, carValidUpdateMock);

		expect(data).toStrictEqual(updatedCar);
	});
});
