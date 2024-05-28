import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/prisma';

class EnsureCarsMiddleware {
	public carIdExists = async (
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response | void> => {
		const { carId } = req.params;
		const foundCar = await prisma.car.findFirst({ where: { id: carId } });
		if (!foundCar) {
			return res.status(404).json({
				message: 'Car not found.',
			});
		}
		res.locals = { ...res.locals, foundCar };
		return next();
	};
}

export const ensureCars = new EnsureCarsMiddleware();
