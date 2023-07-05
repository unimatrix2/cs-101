import readLine from 'readline';

import IOParser from '../lib/Parser';

export class BinaryDecaNumberConverter {
	constructor() {
		this.readLineInterface = readLine
			.createInterface({
				input: process.stdin,
				terminal: false,
			})
			.on('line', (input: string) => {
				if (input === '.exit') {
					this.readLineInterface.close();
					process.exit(0);
				}
				try {
					// let operationList: List | null = new List(
					// 	IOParser.parseJSONFromLine(input)
					// );
					// process.stdout.write(
					// 	IOParser.convertOutputToJSONString(operationList.processList()) +
					// 		'\n'
					// );
					// operationList = null;
				} catch (error) {
					if (error instanceof Error) {
						console.error(error.message);
						process.exit(1);
					}
					process.exit(1);
				}
			});
	}

	private readLineInterface: readLine.Interface;

	public static main() {
		new BinaryDecaNumberConverter();
	}
}

export default BinaryDecaNumberConverter.main();