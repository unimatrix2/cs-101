import type { Input } from '../@types/io';

export default class IOParser {
	static parseJSONFromLine(jsonString: Input): number[] {
		try {
			const parsedOperationLine: number[] = JSON.parse(jsonString);
			return parsedOperationLine;
		} catch (error) {
			throw new Error('Invalid JSON detected.');
		}
	}

	// static convertOutputToJSONString(computedOutput: OperationOutput[]) {
	// 	return JSON.stringify(computedOutput);
	// }
}