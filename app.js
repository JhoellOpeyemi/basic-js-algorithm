// First Task - convertFahrToCelsius()

/* 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius. */

function convertFahrToCelsius(fahr) {
	const formula = (((fahr - 32) * 5) / 9).toFixed(4);

	// If value passed is a number
	if (typeof fahr === 'number') {
		const result = Number(formula);
		const numberValue = result;
		return result;
	}

	// If value passed is a string and can be converted to a number
	if (typeof fahr === 'string') {
		const typeOf = typeof fahr;
		const stringValue = `'${fahr}' is not a valid number but a/an ${typeOf}.`;

		if (Number(fahr)) {
			const result = Number(formula);
			return result;
		} else if (fahr == '') {
			return stringValue;
		} else if (fahr == '0') {
			const result = parseFloat(formula);
			return result;
		}

		return stringValue;
	}

	// If value passed is an array
	if (Array.isArray(fahr)) {
		const arrayValue = `[${fahr}] is not a valid number but a/an array.`;
		return arrayValue;
	}

	// If value passed is a boolean
	if (fahr === true || fahr === false) {
		const booleanValue = `'${fahr}' is not a valid number but a/an boolean.`;
		return booleanValue;
	}

	// If value passed is an object
	if (typeof fahr === 'object') {
		const value = JSON.stringify(fahr);
		return `${value} is not a valid number but a/an object.`;
	}
}

// Scecond Task - checkYuGiOh()

/* 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.*/

function checkYuGiOh(value) {
	let result = [];

	for (let i = 1; i <= value; i++) {
		localArray = [];

		if (i % 2 == 0) {
			localArray.push('yu');
		}

		if (i % 3 == 0) {
			localArray.push('gi');
		}
		if (i % 5 == 0) {
			localArray.push('oh');
		}

		if (localArray.length > 0) {
			result.push(localArray.join('-'));
		} else {
			result.push(i);
		}
	}

	// If value passed is a string
	if (typeof value == 'string') {
		const stringValue = `invalid parameter: '${value}'`;

		if (Number(value)) {
			return result;
		} else if (value == '0') {
			return result;
		}

		return stringValue;
	}

	// If value passed is an array
	if (Array.isArray(value)) {
		return `invalid parameter: [${value}]`;
	}

	// If value passed is a boolean
	if (value === true || value === false) {
		return `invalid parameter: '${value}'`;
	}

	// If value passed is an object
	if (typeof value === 'object') {
		const content = JSON.stringify(value);
		return `invalid parameter: ${content}`;
	}
	return result;
}
