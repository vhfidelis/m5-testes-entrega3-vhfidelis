import { Router } from 'express';
import { container } from 'tsyringe';
import { CarsService } from '../services';
import { CarsController } from '../controllers';
import { ensure, ensureCars } from '../middlewares';
import { carsCreateSchema, carsUpdateSchema } from '../schemas';

export const carsRouter = Router();

container.registerSingleton('CarsService', CarsService);
const carsController = container.resolve(CarsController);

carsRouter.post('/', ensure.bodyIsValid(carsCreateSchema), (req, res) =>
	carsController.create(req, res)
);
carsRouter.get('/', (req, res) => carsController.list(req, res));
carsRouter.use('/:carId', ensureCars.carIdExists);
carsRouter.get('/:carId', (req, res) => carsController.retrieve(req, res));
carsRouter.patch('/:carId', ensure.bodyIsValid(carsUpdateSchema), (req, res) =>
	carsController.update(req, res)
);
carsRouter.delete('/:carId', (req, res) => carsController.delete(req, res));
