// Find the maximum and minimum element in an array

// Solution 1 - linear search
// Time Complexity - O(n)
// Space Complexity - O(1)
const getMinMax = (arr, size) => {
	let min = arr[0];
	let max = arr[0];

	arr.forEach((value) => {
		if (min > value) {
			min = value;
		}
		if (max < value) {
			max = value;
		}
	});
	return { min, max };
};

// Solution 2 - Tournament Method
// Divide the array into two parts and compare the maximums and minimums of the two parts to get the maximum and the minimum of the whole array.

const getMinMax2 = (arr, low, high) => {
	// If only 1 item
	if (low === high) return { min: arr[low], max: arr[high] };

	// If only 2 items
	if (high === low + 1) {
		if (arr[low] > arr[high]) {
			return { max: arr[low], min: arr[high] };
		}
		return { max: arr[high], min: arr[low] };
	}

	// If items > 2
	const mid = Math.floor((low + high) / 2);
	const mml = getMinMax2(arr, low, mid);
	const mmr = getMinMax2(arr, mid + 1, high);

	let min = 0;
	let max = 0;

	if (mml.min < mmr.min) {
		min = mml.min;
	} else {
		min = mmr.min;
	}

	if (mml.max < mmr.max) {
		max = mmr.max;
	} else {
		max = mml.max;
	}
	return { min, max };
};

// Tests
const arr1 = [3, 125, 1, -200, 3000, 3234];
const arr2 = [2];
const arr3 = [5, 3];

// const { min, max } = getMinMax(arr1);
const { min, max } = getMinMax2(arr1, 0, arr1.length - 1);
// const { min, max } = getMinMax2(arr2, 0, arr2.length - 1);
// const { min, max } = getMinMax2(arr3, 0, arr3.length - 1);
console.log(min, max);
