import { container } from 'tsyringe';
import { CarsService } from '../../services';
import { carValidMock } from '../__mocks__/car.mocks';

describe('Unit test: delete car', () => {
	test('Should be able to delete a car correctly', async () => {
		const carServices = container.resolve(CarsService);
		await carServices.delete(carValidMock.id);
	});
});
