import { inject, injectable } from 'tsyringe';
import { CarsService } from '../services';
import { Request, Response } from 'express';
import { TCarsCreate } from '../interfaces';

@injectable()
export class CarsController {
	constructor(@inject('CarsService') private carsService: CarsService) {}

	public create = async (req: Request, res: Response): Promise<Response> => {
		const payload: TCarsCreate = { ...req.body };
		const car = await this.carsService.create(payload);
		return res.status(201).json(car);
	};

	public list = async (req: Request, res: Response): Promise<Response> => {
		const cars = await this.carsService.list();
		return res.status(200).json(cars);
	};

	public retrieve = async (req: Request, res: Response): Promise<Response> => {
		const carId = req.params.carId;
		const car = await this.carsService.retrieve(carId);
		return res.status(200).json(car);
	};

	public update = async (req: Request, res: Response): Promise<Response> => {
		const carId = req.params.carId;
		const payload = req.body;
		const car = await this.carsService.update(carId, payload);
		return res.status(200).json(car);
	};
	public delete = async (req: Request, res: Response): Promise<Response> => {
		const carId = req.params.carId;
		await this.carsService.delete(carId);
		return res.status(204).json();
	};
}
