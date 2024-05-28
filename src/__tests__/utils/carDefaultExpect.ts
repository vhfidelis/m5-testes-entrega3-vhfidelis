import { TCars, TCarsCreate } from '../../interfaces';

export const carDefaultExpectedResponse = (
	data: TCars,
	expected: TCarsCreate
) => {
	expect(data.id).toBeDefined();
	expect(data.name).toStrictEqual(expected.name);
	expect(data.brand).toStrictEqual(expected.brand);
	expect(data.description).toStrictEqual(expected.description);
	expect(data.year).toStrictEqual(expected.year);
	expect(data.km).toStrictEqual(expected.km);
};
