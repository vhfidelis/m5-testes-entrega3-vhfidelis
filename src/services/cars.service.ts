import { injectable } from 'tsyringe';
import { TCars, TCarsCreate, TCarsUpdate } from '../interfaces';
import { prisma } from '../database/prisma';
import { carsSchema } from '../schemas';

@injectable()
export class CarsService {
	public create = async (payload: TCarsCreate): Promise<TCars> => {
		const newCar = await prisma.car.create({ data: payload });
		return carsSchema.parse(newCar);
	};
	public list = async (): Promise<TCars[]> => {
		const cars = await prisma.car.findMany();
		return carsSchema.array().parse(cars);
	};
	public retrieve = async (carId: string): Promise<TCars> => {
		const car = await prisma.car.findFirst({
			where: { id: { equals: carId } },
		});
		return carsSchema.parse(car);
	};
	public update = async (
		carId: string,
		payload: TCarsUpdate
	): Promise<TCars> => {
		const newCar = await prisma.car.update({
			where: { id: carId },
			data: { ...payload },
		});
		return carsSchema.parse(newCar);
	};

	public delete = async (carId: string): Promise<void> => {
		await prisma.car.delete({ where: { id: carId } });
	};
}
